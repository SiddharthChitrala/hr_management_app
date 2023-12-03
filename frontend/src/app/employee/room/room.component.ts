import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

// Ensure 'apiRTC' is globally available
declare var apiRTC: any;


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {

  conversationFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.conversationFormGroup = this.fb.group({
      name: this.fb.control('', [Validators.required])
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get conversationNameFc(): FormControl {
    return this.conversationFormGroup.get('name') as FormControl;
  }

  getOrcreateConversation(): void {
    let localStream: any = null; // Define the type explicitly

    //==============================
    // 1/ CREATE USER AGENT
    //==============================
    const ua = new apiRTC.UserAgent({
      uri: 'apzkey:02e3bfc7f5f583b1a5f84d21ed4df3a0'
    });

    //==============================
    // 2/ REGISTER
    //==============================
    ua.register().then((session: any) => { // Define the type of 'session'

      //==============================
      // 3/ CREATE CONVERSATION
      //==============================
      const conversation = session.getConversation(this.conversationNameFc.value);

      //==========================================================
      // 4/ ADD EVENT LISTENER : WHEN NEW STREAM IS AVAILABLE IN CONVERSATION
      //==========================================================
      conversation.on('streamListChanged', (streamInfo: any) => {
        console.log("streamListChanged :", streamInfo);
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation.subscribeToMedia(streamInfo.streamId)
              .then((stream: any) => { // Define the type of 'stream'
                console.log('subscribeToMedia success');
              }).catch((err: any) => { // Define the type of 'err'
                console.error('subscribeToMedia error', err);
              });
          }
        }
      });

      //=====================================================
      // 4 BIS/ ADD EVENT LISTENER : WHEN STREAM IS ADDED/REMOVED TO/FROM THE CONVERSATION
      //=====================================================
      conversation.on('streamAdded', (stream: any) => {
        stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
      }).on('streamRemoved', (stream: any) => {
        stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId);
      });

      //==============================
      // 5/ CREATE LOCAL STREAM
      //==============================
      ua.createStream({
        constraints: {
          audio: true,
          video: true
        }
      }).then((stream: any) => { // Define the type of 'stream'

        console.log('createStream :', stream);

        // Save local stream
        localStream = stream;
        stream.removeFromDiv('local-container', 'local-media');
        stream.addInDiv('local-container', 'local-media', {}, true);

        //==============================
        // 6/ JOIN CONVERSATION
        //==============================
        conversation.join()
          .then((response: any) => {
            //==============================
            // 7/ PUBLISH LOCAL STREAM
            //==============================
            conversation.publish(localStream);
          }).catch((err: any) => { // Define the type of 'err'
            console.error('Conversation join error', err);
          });

      }).catch((err: any) => { // Define the type of 'err'
        console.error('create stream error', err);
      });
    });
  }
}

