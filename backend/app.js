const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/routes');
const Resume = require('./user-resume-upload/userModel');

app.use(cors());
app.use(express.json());
app.use(routes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hr_management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully');
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();

app.use('/uploads', express.static('uploads'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.post('/upload', upload.single('resume'), (req, res) => {
  const { originalname, path } = req.file;

  const {
    full_name,
    email,
    phone,
    address,
    position,
    job_type,
    education,
    experience,
    cover_letter,
    status,
  } = req.body;

  const resume = new Resume({
    name: originalname,
    path,
    full_name,
    email,
    phone,
    address,
    position,
    job_type,
    education,
    experience,
    cover_letter,
    status,
  });

  console.log('Received form data:', req.body);

  resume
    .save()
    .then(() => {
      res.json({ message: 'Resume uploaded successfully' });
    })
    .catch((error) => {
      console.error('Error saving resume and form data to MongoDB', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/resumes', (req, res) => {
  Resume.find({})
    .exec()
    .then((resumes) => {
      res.json(resumes);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/download/:id', (req, res) => {
  const resumeId = req.params.id;

  Resume.findById(resumeId)
    .then((resume) => {
      if (!resume) {
        res.status(404).json({ error: 'Resume not found' });
      } else {
        const filePath = path.join(__dirname, 'uploads', resume.name);
        const fileStream = fs.createReadStream(filePath);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${resume.name}"`);

        fileStream.pipe(res);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Add a route to update the status by resume ID
app.put('/updateStatus/:id', async (req, res) => {
  const resumeId = req.params.id;
  const newStatus = req.body.status;

  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      resumeId,
      { $set: { status: newStatus } },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.json({ message: 'Status updated successfully', resume: updatedResume });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// ...

// DELETE route to remove a resume by ID
app.delete('/deleteResume/:id', async (req, res) => {
  const resumeId = req.params.id;

  try {
    const deletedResume = await Resume.findByIdAndRemove(resumeId);

    if (!deletedResume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    // Remove the associated file
    const filePath = path.join(__dirname, 'uploads', deletedResume.name);
    fs.unlinkSync(filePath);

    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    console.error('Error deleting resume:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a route to get resume details by ID
app.get('/resume/:id', (req, res) => {
  const resumeId = req.params.id;

  Resume.findById(resumeId)
    .then((resume) => {
      if (!resume) {
        res.status(404).json({ error: 'Resume not found' });
      } else {
        res.json(resume);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(9000, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected port');
  }
});
