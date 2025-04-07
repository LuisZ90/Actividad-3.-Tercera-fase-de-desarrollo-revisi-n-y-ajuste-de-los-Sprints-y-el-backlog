import React, { useState, useEffect } from 'react';
import './App.css';

// Datos actualizados con mejoras del Mid-Sprint 4
const videos = [
  { 
    id: 1, 
    title: 'Álgebra Básica', 
    subject: 'Matemáticas', 
    url: { '360p': 'https://youtu.be/basic-algebra-360', '720p': 'https://youtu.be/basic-algebra-720' },
    subtitles: true,
    vttUrl: '/subtitles/algebra.vtt',
    duration: '15:30'
  },
  { 
    id: 2, 
    title: 'Fotosíntesis', 
    subject: 'Biología', 
    url: { '360p': 'https://youtu.be/photosynthesis-360', '720p': 'https://youtu.be/photosynthesis-720' },
    subtitles: false,
    duration: '20:15'
  },
];

const pdfGuides = [
  { 
    id: 1, 
    title: 'Guía de Matemáticas', 
    url: 'https://aws.s3/guia-matematicas-v3.pdf',
