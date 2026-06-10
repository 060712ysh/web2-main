<script setup>
import qrUrl from '../assets/QRCODE.png'
</script>

<template>
  <div class="qr-section">
    <div class="qr-container">
      <img :src="qrUrl" alt="QR Code" class="real-qr">
    </div>
    <h3>使用 QR Code 登入</h3>
    <p class="qr-instruction">用 <strong>Discord 行動應用程式</strong> 對此掃描就能立即登入。</p>
  </div>
</template>

<style scoped>
.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 240px;
}

.qr-container {
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.real-qr {
  width: 160px;
  height: 160px;
  display: block;
}

h3 {
  color: #F2F3F5;
  margin-bottom: 8px;
  font-size: 24px;
}

.qr-instruction {
  color: #B5BAC1;
  text-align: center;
  font-size: 16px;
  line-height: normal;
}

.qr-instruction strong {
  color: #DBDEE1;
}

@media (max-width: 768px) {
  .qr-section {
    display: none;
  }
}
</style>
