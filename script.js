document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let currentViz = 'fluid-waves';
    let searchTerm = '';
    let selectedPalette = null;
    let isDarkTheme = false;
    
    // DOM elements
    const paletteGrid = document.getElementById('palette-grid');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const themeToggle = document.getElementById('theme-toggle');
    const vizOptions = document.querySelectorAll('.viz-option');
    const modal = document.getElementById('palette-detail');
    const closeButton = document.querySelector('.close-button');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Initialize the palette grid
    renderPalettes();
    
    // Event listeners
    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', () => handleSearch());
    themeToggle.addEventListener('click', toggleTheme);
    vizOptions.forEach(option => {
        option.addEventListener('click', () => setVisualization(option.dataset.viz));
    });
    closeButton.addEventListener('click', closeModal);
    
    // Copy and download buttons
    document.getElementById('copy-palette').addEventListener('click', copyPalette);
    document.getElementById('download-svg').addEventListener('click', downloadSvg);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Functions
    function renderPalettes() {
        // Clear the grid
        paletteGrid.innerHTML = '';
        
        // Filter palettes based on search
        let filteredPalettes = filterPalettes(colorPalettes);
        
        // Check if there are any palettes to display
        if (filteredPalettes.length === 0) {
            paletteGrid.innerHTML = '<div class="no-results">No palettes found matching your search.</div>';
            return;
        }
        
        // Render each palette card
        filteredPalettes.forEach((palette, index) => {
            const card = createPaletteCard(palette, index);
            paletteGrid.appendChild(card);
        });
    }
    
    function createPaletteCard(palette, index) {
        const card = document.createElement('div');
        card.className = 'palette-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Create visualization
        const visualization = document.createElement('div');
        visualization.className = 'palette-visualization';
        
        const vizContent = createVisualization(currentViz, palette.colors);
        visualization.appendChild(vizContent);
        
        // Create info section
        const info = document.createElement('div');
        info.className = 'palette-info';
        
        const name = document.createElement('h3');
        name.textContent = palette.name;
        
        const tags = document.createElement('div');
        tags.className = 'tags';
        
        palette.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });
        
        const colors = document.createElement('div');
        colors.className = 'colors';
        
        palette.colors.forEach(color => {
            const colorPreview = document.createElement('div');
            colorPreview.className = 'color-preview';
            colorPreview.style.backgroundColor = color.hex;
            colors.appendChild(colorPreview);
        });
        
        info.appendChild(name);
        info.appendChild(tags);
        info.appendChild(colors);
        
        card.appendChild(visualization);
        card.appendChild(info);
        
        // Add click event to open modal
        card.addEventListener('click', () => openPaletteDetail(palette));
        
        return card;
    }
    
    function createVisualization(type, colors) {
        const container = document.createElement('div');
        container.className = type;
        
        switch (type) {
            case 'fluid-waves':
                colors.forEach((color, index) => {
                    const wave = document.createElement('div');
                    wave.className = 'wave';
                    wave.style.backgroundColor = color.hex;
                    wave.style.animationDelay = `${index * -2}s`;
                    container.appendChild(wave);
                });
                break;
                
            case 'blob-shapes':
                colors.forEach((color, index) => {
                    const blob = document.createElement('div');
                    blob.className = 'blob';
                    blob.style.backgroundColor = color.hex;
                    blob.style.animationDelay = `${index * -5}s`;
                    container.appendChild(blob);
                });
                break;
                
            case 'gradient-circles':
                colors.forEach((color, index) => {
                    const circle = document.createElement('div');
                    circle.className = 'circle';
                    circle.style.backgroundColor = color.hex;
                    circle.style.animationDelay = `${index * -2}s`;
                    container.appendChild(circle);
                });
                break;
        }
        
        return container;
    }
    
    function filterPalettes(palettes) {
        if (searchTerm === '') return palettes;
        
        const searchLower = searchTerm.toLowerCase();
        
        return palettes.filter(palette => {
            // Search by name
            if (palette.name.toLowerCase().includes(searchLower)) return true;
            
            // Search by tags
            if (palette.tags.some(tag => tag.toLowerCase().includes(searchLower))) return true;
            
            // Search by color values (hex, rgb, cmyk)
            if (palette.colors.some(color => 
                color.hex.toLowerCase().includes(searchLower) ||
                color.rgb.toLowerCase().includes(searchLower) ||
                color.cmyk.toLowerCase().includes(searchLower)
            )) return true;
            
            return false;
        });
    }
    
    function handleSearch() {
        searchTerm = searchInput.value.trim();
        renderPalettes();
    }
    
    function setVisualization(viz) {
        currentViz = viz;
        
        // Update active button
        vizOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.viz === viz);
        });
        
        // Re-render palettes with new visualization
        renderPalettes();
    }
    
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);
        
        // Update theme icon
        if (isDarkTheme) {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            `;
        } else {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
        }
    }
    
    function openPaletteDetail(palette) {
        selectedPalette = palette;
        
        // Set palette details
        document.getElementById('detail-name').textContent = palette.name;
        
        // Set tags
        const tagsContainer = document.getElementById('detail-tags');
        tagsContainer.innerHTML = '';
        
        palette.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag-item';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        
        // Set colors
        const colorsContainer = document.getElementById('detail-colors');
        colorsContainer.innerHTML = '';
        
        palette.colors.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.className = 'color-item';
            
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color.hex;
            
            const details = document.createElement('div');
            details.className = 'color-details';
            
            const hex = document.createElement('div');
            hex.className = 'color-hex';
            hex.textContent = color.hex;
            
            const values = document.createElement('div');
            values.className = 'color-values';
            
            const rgb = document.createElement('span');
            rgb.textContent = `RGB: ${color.rgb}`;
            
            const cmyk = document.createElement('span');
            cmyk.textContent = `CMYK: ${color.cmyk}`;
            
            values.appendChild(rgb);
            values.appendChild(cmyk);
            
            details.appendChild(hex);
            details.appendChild(values);
            
            colorItem.appendChild(swatch);
            colorItem.appendChild(details);
            
            colorsContainer.appendChild(colorItem);
        });
        
        // Create visualization in modal
        const vizContainer = document.querySelector('.visualization-container');
        vizContainer.innerHTML = '';
        const vizContent = createVisualization(currentViz, palette.colors);
        vizContainer.appendChild(vizContent);
        
        // Show modal with animation
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    function copyPalette() {
        if (!selectedPalette) return;
        
        const colorValues = selectedPalette.colors.map(color => `${color.hex} (RGB: ${color.rgb}, CMYK: ${color.cmyk})`).join('\\n');
        const textToCopy = `${selectedPalette.name}\\n${colorValues}`;
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => showNotification('Palette copied to clipboard!'))
            .catch(err => console.error('Could not copy text: ', err));
    }
    
    function downloadSvg() {
        if (!selectedPalette) return;
        
        // Create SVG
        const colors = selectedPalette.colors;
        const svgWidth = 800;
        const svgHeight = 400;
        
        let svgContent = '';
        
        switch (currentViz) {
            case 'fluid-waves':
                svgContent = createFluidWavesSvg(colors, svgWidth, svgHeight);
                break;
            case 'blob-shapes':
                svgContent = createBlobShapesSvg(colors, svgWidth, svgHeight);
                break;
            case 'gradient-circles':
                svgContent = createGradientCirclesSvg(colors, svgWidth, svgHeight);
                break;
        }
        
        // Create download link
        const link = document.createElement('a');
        link.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent));
        link.setAttribute('download', `${selectedPalette.name.replace(/\\s+/g, '-').toLowerCase()}-${currentViz}.svg`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('SVG downloaded successfully!');
    }
    
    function createFluidWavesSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white"/>`;
        
        // Waves
        colors.forEach((color, index) => {
            const yPos = height * (index + 1) / (colors.length + 1);
            const amplitude = height / 8;
            const frequency = 0.01;
            
            let path = `<path d="M0,${yPos}`;
            
            for (let x = 0; x <= width; x += 10) {
                const y = yPos + Math.sin(x * frequency) * amplitude;
                path += ` L${x},${y}`;
            }
            
            path += ` L${width},${height} L0,${height} Z" fill="${color.hex}" opacity="0.7"/>`;
            svg += path;
        });
        
        // Add palette name
        svg += `<text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#333">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="#333">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function createBlobShapesSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white"/>`;
        
        // Blobs
        colors.forEach((color, index) => {
            const cx = width * (index + 1) / (colors.length + 1);
            const cy = height / 2;
            const rx = width / (colors.length + 1) * 0.8;
            const ry = height / 3;
            
            svg += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${color.hex}" opacity="0.7">
                <animate attributeName="rx" values="${rx};${rx*1.1};${rx}" dur="5s" repeatCount="indefinite" />
                <animate attributeName="ry" values="${ry};${ry*0.9};${ry}" dur="5s" repeatCount="indefinite" />
            </ellipse>`;
        });
        
        // Add palette name
        svg += `<text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#333">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="#333">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function createGradientCirclesSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white"/>`;
        
        // Define gradients
        svg += '<defs>';
        colors.forEach((color, index) => {
            svg += `<radialGradient id="grad${index}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style="stop-color:${color.hex};stop-opacity:1" />
                <stop offset="100%" style="stop-color:${color.hex};stop-opacity:0" />
            </radialGradient>`;
        });
        svg += '</defs>';
        
        // Circles
        const centerX = width / 2;
        const centerY = height / 2;
        
        colors.forEach((color, index) => {
            const radius = 150 - (index * 40);
            svg += `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="url(#grad${index})" opacity="0.7">
                <animate attributeName="r" values="${radius};${radius*1.1};${radius}" dur="${3 + index}s" repeatCount="indefinite" />
            </circle>`;
        });
        
        // Add palette name
        svg += `<text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#333">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="#333">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function showNotification(message) {
        // Create notification if it doesn't exist
        let notification = document.querySelector('.copy-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'copy-notification';
            document.body.appendChild(notification);
        }
        
        // Set message and show
        notification.textContent = message;
        notification.classList.add('show');
        
        // Hide after 2 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
});
