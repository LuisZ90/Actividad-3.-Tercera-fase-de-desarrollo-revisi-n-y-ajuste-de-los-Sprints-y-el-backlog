/* Estilos Avanzados */
:root {
  --primary: #2b6cb0;
  --secondary: #4299e1;
  --accent: #f6ad55;
  --background: #f7fafc;
  --text: #2d3748;
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.App {
  max-width: 1440px;
  margin: 0 auto;
  background: var(--background);
  min-height: 100vh;
}

/* Mejoras Visuales */
.video-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow);
}

.thumbnail-container {
  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(45deg, #edf2f7, #e2e8f0);
}

.thumbnail-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));
}

.quality-selector {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: rgba(255,255,255,0.9);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  backdrop-filter: blur(4px);
}

.pdf-viewer-modal {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  padding: 2rem;
}

.pdf-index ul {
  list-style: none;
  padding: 0;
}

.pdf-index li {
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.pdf-index li:hover {
  background: var(--background);
}

.signed-badge {
  background: #48bb78;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.video-player-modal {
  animation: fadeIn 0.3s ease-out;
}

.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  z-index: 100;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--primary);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@media (max-width: 768px) {
  .pdf-viewer-modal {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .quality-selector {
    flex-wrap: wrap;
    justify-content: center;
  }
}
