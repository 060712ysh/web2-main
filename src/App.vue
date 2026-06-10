<script setup>
import LoginForm from './components/LoginForm.vue'
import QrSection from './components/QrSection.vue'
import logoUrl from './assets/LOGO.png'
</script>

<template>
  <div class="login-wrapper">
    <div class="dc-logo-container">
      <img :src="logoUrl" alt="Discord Logo" class="main-logo">
    </div>

    <div class="login-card">
      <LoginForm />
      <QrSection />
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}

.dc-logo-container {
  margin-bottom: 24px;
}

.main-logo {
  width: 124px;
  height: auto;
}

.login-card {
  background-color: #2B2D31;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.24);
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 780px;
}

@media (max-width: 768px) {
  .login-card {
    flex-direction: column;
    max-width: 480px;
    gap: 16px;
  }
}
</style>
