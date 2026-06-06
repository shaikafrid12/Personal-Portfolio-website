const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project short description is required']
  },
  detailedDescription: {
    type: String,
    default: '' // Can store full project case study in markdown
  },
  image: {
    type: String,
    required: [true, 'Project mockup image path or URL is required']
  },
  technologies: {
    type: [String],
    required: [true, 'Technologies are required']
  },
  githubLink: {
    type: String,
    default: ''
  },
  liveLink: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    default: 'Web Development'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
