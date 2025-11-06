# ADR-0011: Elección Internal Developer Portal (IDP) — Backstage.io vs Port.io

## Estado

Borrador

## Fecha

2025-10-27

## Equipos involucrados

- @devops-architect (Responsible)
- @health-architect (Consulted)
- @cloud-architect (Informed)
- @marketplace-team (Informed)

---

## Contexto

El equipo de plataforma está evaluando herramientas para implementar un **Developer Portal / Internal Developer Platform (IDP)** que centralice:

- Catálogo de servicios y documentación técnica.  
- Integración con pipelines CI/CD y entornos de ejecución.  
- Plantillas de scaffolding para nuevos proyectos.  
- Gobernanza, trazabilidad y observabilidad.  

Las principales opciones analizadas son **[Backstage](https://backstage.io)** (open source, impulsado por Spotify y CNCF) y **[Port.io](https://port.io)** (plataforma SaaS comercial orientada a IDP con enfoque low-code).

Los objetivos clave de la decisión:

- Mejorar la **experiencia de desarrollo** (DevEx).  
- Reducir la fricción en la entrega de servicios.  
- Unificar el acceso a documentación, infraestructura y despliegues.  
- Garantizar **extensibilidad** y control sobre datos y seguridad.

---

## Decisión

**Adoptar Backstage como plataforma base del portal de desarrolladores** de la organización.  

La plataforma se desplegará y mantendrá internamente, integrándose con CI/CD, repositorios Git, Kubernetes/ECS y sistemas de documentación (TechDocs).

### Fundamentos

- **Open Source y extensible:** Backstage permite personalización total mediante plugins y APIs.  
- **Ecosistema activo:** comunidad CNCF, soporte de grandes empresas, plugins oficiales.  
- **Control de datos y seguridad:** se ejecuta en infraestructura propia, cumpliendo políticas corporativas.  
- **Alineamiento con estrategia cloud-native:** Backstage se integra fácilmente con pipelines y servicios existentes.  
- **Coste operativo bajo:** no requiere licencias por usuario ni cuota SaaS.

---

## Alternativas Consideradas

### 1. Port.io

- **Pros:**
  - SaaS administrado: sin mantenimiento ni despliegue propio.  
  - Interfaz moderna y orientada a _insights_ de plataforma.  
  - Configuración rápida mediante blueprints y relaciones visuales.  
- **Contras:**
  - Modelo cerrado, dependiente del proveedor.  
  - Limitaciones para integraciones complejas o personalizadas.  
  - Coste mensual/licencia por usuario o servicio.  
  - Dependencia de APIs externas (vendor lock-in).

### 2. Backstage (chosen)

- **Pros:**
  - Código abierto, extensible, sin costes de licencia.  
  - Amplio ecosistema de plugins.  
  - Total control sobre datos, UI y backend.  
  - Integración nativa con Kubernetes, GitHub, Jenkins, GitLab, etc.  
- **Contras:**
  - Mayor esfuerzo inicial de configuración y mantenimiento.  
  - Requiere desarrollo de plugins propios.  
  - Curva de aprendizaje técnica (Node.js, React, YAML, etc.).

---

## Consecuencias

- ✅ **Positivas:**
  - Plataforma unificada y extensible para equipos de desarrollo.  
  - Evita dependencia de terceros y refuerza soberanía técnica.  
  - Permite iterar gradualmente sin costes de licencia.  

- ⚠️ **Negativas / trade-offs:**
  - Requiere recursos internos (infraestructura + mantenimiento).  
  - Curva de adopción inicial para equipos no familiarizados.  

---

## Tabla comparativa de criterios

| Criterio | Backstage | Port.io |
|-----------|------------|----------|
| Modelo de entrega | Self-hosted (open source) | SaaS (cloud) |
| Licenciamiento | Gratuito, Apache 2.0 | Comercial (por usuario/servicio) |
| Extensibilidad | Alta (plugins, APIs) | Limitada a blueprints definidos |
| Comunidad y soporte | Amplia, activa (CNCF) | Limitada al soporte comercial |
| Integración CI/CD | Nativa (GitHub, GitLab, Jenkins) | Disponible vía API |
| Seguridad y compliance | Control total interno | Dependencia del proveedor |
| Analítica y reporting | Básico (extensible) | Avanzado, integrado |
| Coste total (TCO) | Bajo (infraestructura propia) | Medio-alto (licencias SaaS) |
| Curva de aprendizaje | Alta | Baja |
| Control de datos | Total | Parcial |

---
