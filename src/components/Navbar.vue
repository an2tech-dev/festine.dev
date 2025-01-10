<template>
    <nav class="navbar">
      <div class="logo">festine.dev</div>
      <ul class="nav-links">
        <li><RouterLink to="/">Homes</RouterLink></li>
        <li><RouterLink to="/pages">Pages</RouterLink></li>
        <li><RouterLink to="/landing">Landing</RouterLink></li>
        <li><RouterLink to="/blog">Blog</RouterLink></li>
        <li><RouterLink to="/widgets">Widgets</RouterLink></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0 auto; 
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #000;
  }
  </style>
  