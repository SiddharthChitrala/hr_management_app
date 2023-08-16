import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import Peer from 'peerjs';

interface VideoElement {
  muted: boolean;
  srcObject: MediaStream;
  userId: string;
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  currentUserId: string = ''; // Holds the current user's ID
  roomId: string = ''; // Holds the room ID
  videos: VideoElement[] = []; // Array to hold video elements

  constructor(private route: ActivatedRoute, private socket: Socket) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.roomId = params['roomId']; // Extract room ID from the URL

      const myPeer = new Peer(); // Initialize PeerJS instance

      myPeer.on('open', (userId: string) => {
        this.currentUserId = userId; // Assign the generated user ID

        // Emit 'join-room' event to the server
        this.socket.emit('join-room', this.roomId, userId);
      });

      // Get user's media stream
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then((stream: MediaStream) => {
          this.addMyVideo(stream); // Display user's own video

          // Handle incoming calls
          myPeer.on('call', (call: any) => {
            call.answer(stream); // Answer the call with user's stream
            call.on('stream', (otherUserVideoStream: MediaStream) => {
              this.addOtherUserVideo(call.peer, otherUserVideoStream); // Display other user's video
            });
          });

          // Listen for 'user-connected' event from server
          this.socket.on('user-connected', (userId: string) => {
            setTimeout(() => {
              // Call the user and send your own stream
              const call = myPeer.call(userId, stream, {
                metadata: { userId: this.currentUserId },
              });

              // Handle incoming stream from the other user
              call.on('stream', (otherUserVideoStream: MediaStream) => {
                this.addOtherUserVideo(userId, otherUserVideoStream);
              });
            }, 1000);
          });
        })
        .catch((err) => {
          console.error('[Error] Not able to retrieve user media:', err);
        });

      // Listen for 'user-disconnected' event from server
      this.socket.on('user-disconnected', (userId: string) => {
        // Remove disconnected user's video
        this.videos = this.videos.filter((video) => video.userId !== userId);
      });
    });
  }

  // Function to add user's own video to the video grid
  addMyVideo(stream: MediaStream) {
    this.videos.push({
      muted: true,
      srcObject: stream,
      userId: this.currentUserId,
    });
  }

  // Function to add other user's video to the video grid
  addOtherUserVideo(userId: string, stream: MediaStream) {
    const alreadyExisting = this.videos.some((video) => video.userId === userId);
    if (!alreadyExisting) {
      this.videos.push({
        muted: false,
        srcObject: stream,
        userId,
      });
    }
  }

  // Function to play videos once loaded
  onLoadedMetadata(event: Event) {
    (event.target as HTMLVideoElement).play();
  }
}
