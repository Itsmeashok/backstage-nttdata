# 🤖 Asistentes de IA para Backstage

Este documento resume dos de las principales opciones para integrar un asistente de inteligencia artificial (chatbot o AI assistant) dentro de tu portal **Backstage**.

---

## 🧩 1. Backchat Plugin

**Nombre:** `@backstage/plugin-backchat`  
**Repositorio:** [benwilcock/backstage-plugin-backchat](https://github.com/benwilcock/backstage-plugin-backchat)

### 🔍 Descripción
Con este plugin puedes agregar un **chat tipo ChatGPT** directamente dentro de tu Backstage.  
Permite conectar con **modelos de lenguaje locales o privados** (por ejemplo, Ollama, LocalAI, TextGenWebUI), sin depender de servicios externos.

### ⚙️ Cómo funciona
El plugin muestra una interfaz de chat dentro del portal.  
Tus mensajes se envían al modelo configurado en tu entorno (`app-config.yaml`), y las respuestas aparecen directamente en Backstage.

Ejemplo de configuración:
```yaml
backchat:
  baseUrl: http://localhost:3001