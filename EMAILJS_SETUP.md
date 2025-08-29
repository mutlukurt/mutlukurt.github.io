# 📧 Contact Form Email Setup Guide

## 🎯 Seçenek 1: EmailJS (Önerilen - Ücretsiz)

### 1. EmailJS Hesap Oluşturma
1. https://www.emailjs.com/ adresine gidin
2. "Sign Up" ile ücretsiz hesap oluşturun
3. Gmail hesabınızla giriş yapabilirsiniz

### 2. Email Service Kurulumu
1. Dashboard'da "Email Services" sekmesine gidin
2. "Add New Service" butonuna tıklayın
3. Gmail'i seçin ve hesabınıza bağlayın
4. Service ID'yi not alın (örn: service_mutlukurt)

### 3. Email Template Oluşturma
1. "Email Templates" sekmesine gidin
2. "Create New Template" butonuna tıklayın
3. Template içeriği:

```
Subject: {{subject}} - Portfolio Contact Form

Merhaba Mutlu,

{{from_name}} ({{from_email}}) adlı kişi portfolio sitenizden mesaj gönderdi:

Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj portfolio contact formunuzdan gönderildi.
```

4. Template ID'yi not alın (örn: template_contact)

### 4. Public Key Alma
1. "Account" sekmesine gidin
2. "API Keys" bölümünden Public Key'i kopyalayın

### 5. Kod Güncellemesi
Contact.jsx dosyasında şu değerleri güncelleyin:
- `serviceID`: EmailJS'den aldığınız service ID
- `templateID`: Oluşturduğunuz template ID
- `publicKey`: EmailJS public key'iniz
- `to_email`: Mesajların geleceği mail adresiniz

---

## 🎯 Seçenek 2: Formspree (Basit Alternatif)

### 1. Formspree Kurulumu
1. https://formspree.io/ adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni form oluşturun
4. Form endpoint'ini alın

### 2. Form Action Güncelleme
```jsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit}
>
```

---

## 🎯 Seçenek 3: Netlify Forms (Netlify'da Deploy Edilirse)

Netlify'da deploy ederseniz, form'a sadece `netlify` attribute'u eklemek yeterli:

```jsx
<form name="contact" method="POST" netlify onSubmit={handleSubmit}>
  <input type="hidden" name="form-name" value="contact" />
  {/* diğer input'lar */}
</form>
```

---

## 🔧 Test Etme

1. Kodu güncelledikten sonra:
   ```bash
   npm run dev
   ```

2. Contact formunu test edin
3. EmailJS dashboard'dan mesaj gönderimlerini kontrol edin

---

## 💡 Öneriler

1. **EmailJS** en kolay ve ücretsiz çözüm
2. Ayda 200 mesaj ücretsiz limit var
3. Spam koruması built-in
4. Real-time delivery status
5. Template customization mümkün

---

## 🛡️ Güvenlik

- Public key'ler client-side'da görünür, bu normal
- Rate limiting EmailJS tarafından yapılır
- Spam koruması otomatik aktif
