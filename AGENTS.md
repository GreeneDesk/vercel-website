# Architecture rules

- Shared-link artwork uses a Lovable Assets pointer with an absolute public-domain URL in both static head tags and the SEO component, so crawlers and rendered pages use the same image.
- Guide-specific long-form pages are dispatched by the existing guide-detail route and share guide metadata, Layout and GuideSignup; this preserves existing URLs and templates.
- Homepage announcements are isolated opt-in components with their own config flag and scoped semantic colour tokens; this avoids changes to shared navigation and existing styles.