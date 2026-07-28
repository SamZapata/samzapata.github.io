# AGENTS.md

Sessions log for AI assistant context.

## [28/07/2026] - Modal interactivo en diagrama hero

**Feature:** Cada nodo del diagrama (`API`, `APP`, `WEB`, `DATABASE`, `CORE`) abre un modal con iconos de tecnologías representativas al hacer clic.

**Archivos modificados:**
- `_pages/hero.html` — Añadido `data-techs` a cada nodo + template del modal (Bootstrap)
- `assets/js/hero.js` — Lógica de click para parsear `data-techs` e inyectar iconos en el modal
- `_sass/_hero.scss` — Estilos `.tech-icon-item` y `#modalTechIcons`

**Dependencias:** Bootstrap 4 (modal), FontAwesome 5 (iconos), jQuery — ya incluidos en el proyecto.

**Notas:**
- Estilo del modal aplicado: "Minimal Glass" — backdrop-filter blur, bordes redondeados 24px, borde sutil primary, hover con translateY(-2px) y sombra primary
- Pendiente: Responsive: verificar en mobile que el modal se vea correctamente
