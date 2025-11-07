# ADR-0011: Elección Internal Developer Portal (IDP) — Backstage.io vs Port.io

## Estado

Validado internamente

## Fecha

2025-10-27

## Equipos involucrados

- @devops-architect (Responsible)
- @health-architect (Consulted)
- @cloud-architect (Informed)
- @marketplace-team (Informed)

---

## Contexto
El equipo de plataforma evalúa herramientas para implementar un **Internal Developer Portal (IDP)** que sirva como punto central de acceso a:

- Catálogo de servicios y documentación técnica (TechDocs).
- Integraciones con pipelines CI/CD (GitHub Actions, Jenkins).
- Plantillas de scaffolding para nuevos microservicios (Node.js, Python, Java).
- Gobernanza de despliegues en Kubernetes/ECS, con trazabilidad y métricas operativas.

El portal debe alinearse con la estrategia **Cloud-Native** de la organización, integrarse con los 
sistemas existentes (GitHub Enterprise, AWS, ArgoCD, Terraform Cloud) y cumplir los requisitos de seguridad corporativa (SSO, IAM, RBAC).

Se comparan dos soluciones principales:
- **Backstage** (open source, CNCF, personalizable)
- **Port.io** (SaaS low-code gestionado)

## Decisión

**Adoptar Backstage como plataforma base del portal de desarrolladores** de la organización.  

La plataforma se desplegará y mantendrá internamente, integrándose con CI/CD, repositorios Git, Kubernetes/ECS y sistemas de documentación (TechDocs).

### Fundamentos

- **Open Source y extensible:** Backstage permite personalización total mediante plugins y APIs.  
- **Ecosistema activo:** comunidad CNCF, soporte de grandes empresas, plugins oficiales.  
- **Control de datos y seguridad:** se ejecuta en infraestructura propia, cumpliendo políticas corporativas.  
- **Alineamiento con estrategia cloud-native:** Backstage se integra fácilmente con pipelines y servicios existentes.  
- **Integración con ecosistema existente:** Backstage ofrece plugins oficiales y soporte nativo para integraciones con GitHub Enterprise, ArgoCD, Terraform Cloud, Jenkins y AWS, facilitando la alineación con los flujos y herramientas actuales de la organización.
- **Coste operativo bajo:** no requiere licencias por usuario ni cuota SaaS.

---

## Alternativas Consideradas

### 1. Port.io
**Pros**
- SaaS administrado, sin necesidad de mantenimiento ni infraestructura.
- Integración rápida con GitHub, Jenkins, Terraform, Kubernetes (vía API).
- Interfaz visual con blueprints para relaciones entre servicios.

**Contras**
- Modelo cerrado: dependiente del proveedor y API propietaria.
- Integraciones personalizadas limitadas (no soporta plugins de backend).
- Coste mensual por usuario o servicio (TCO creciente).
- Vendor lock-in con dependencias cloud-side (no exportable).

### 2. Backstage (Elegida)
**Pros**
- Open source, extensible mediante plugins (Node.js, React).
- Ecosistema CNCF y comunidad activa.
- Integración nativa con CI/CD, Kubernetes, observabilidad y TechDocs.
- Control completo sobre datos, seguridad e identidad (SSO corporativo).

**Contras**
- Requiere infraestructura (EKS/ECS, PostgreSQL, Redis opcional).
- Curva de aprendizaje para desarrollo de plugins (TypeScript, YAML, NodeJS, React, Javascript).
- Coste operativo interno en DevOps + mantenimiento.

## Comparativa de Criterios

| Criterio | **Backstage** | **Port.io** |
|-----------|----------------|--------------|
| Modelo de entrega | Self-hosted (EKS / ECS) | SaaS administrado |
| Licenciamiento | Open Source (Apache 2.0) | Comercial (licencia por usuario/servicio) |
| Extensibilidad | Alta (plugins backend/frontend) | Limitada (blueprints predefinidos) |
| Comunidad y soporte | Amplia (CNCF, Spotify, Roadie.io) | Soporte comercial cerrado |
| Integración CI/CD | Nativa (GitHub, Jenkins, GitLab, ArgoCD) | Mediante APIs |
| Seguridad | Control interno (SSO, IAM, RBAC) | Dependencia del proveedor |
| Observabilidad | Extensible (Prometheus, Datadog) | Integrada (limitada a métricas básicas) |
| Multi-tenancy | Soportable mediante namespaces | Limitado (por cuenta) |
| TCO estimado | Bajo (infra propia) | Medio/Alto (licencia + dependencia SaaS) |
| Curva de aprendizaje | Alta (Node.js, React, YAML) | Baja (UI low-code) |
| Observabilidad | Extensible (Prometheus, Datadog, etc.) | Limitada (métricas básicas) |
| Multi-tenancy | Soportable mediante namespaces | Limitado (por cuenta) |


## Consecuencias

### Positivas
- Control total sobre la plataforma IDP (infraestructura, datos, seguridad).
- Flexibilidad para construir plugins internos (governance, SLO tracking, compliance).
- Alineación con arquitectura cloud-native y pipelines existentes.
- Bajo costo incremental a largo plazo (sin licencias SaaS).


### Negativas
- Requiere esfuerzo inicial de despliegue (EKS, Postgres, CI/CD pipelines).
- Mantenimiento continuo (actualizaciones, plugins, seguridad).
- Curva de adopción para equipos sin experiencia en Backstage.
- Requiere esfuerzo inicial de despliegue y configuración (EKS, Postgres, pipelines CI/CD).
- Mantenimiento continuo necesario (actualizaciones, seguridad, compatibilidad de plugins).


## Recursos Adicionales
- [Backstage.io Documentation](https://backstage.io/docs)
- [Port.io Docs](https://docs.getport.io/)

