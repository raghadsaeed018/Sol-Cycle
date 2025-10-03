        const inventoryData = [
            {
                id: 1,
                name: "Aluminum Panels",
                category: "metals",
                icon: "🔩",
                weight: 145,
                quantity: 23,
                condition: "Good",
                source: "Rover Collection #7",
                description: "High-grade aluminum from damaged solar panel frames. Suitable for structural repairs and new construction.",
                uses: ["Construction", "Repairs", "Tools"]
            },
            {
                id: 2,
                name: "Steel Fasteners",
                category: "metals",
                icon: "🔧",
                weight: 34,
                quantity: 156,
                condition: "Excellent",
                source: "Habitat Maintenance",
                description: "Various sizes of steel bolts, screws, and fasteners. Cleaned and sorted.",
                uses: ["Assembly", "Repairs"]
            },
            {
                id: 3,
                name: "Copper Wiring",
                category: "electronics",
                icon: "⚡",
                weight: 67,
                quantity: 89,
                condition: "Good",
                source: "Rover Collection #5",
                description: "Insulated copper wire from decommissioned equipment. Various gauges available.",
                uses: ["Electrical", "Repairs", "New Systems"]
            },
            {
                id: 4,
                name: "HDPE Containers",
                category: "plastics",
                icon: "🧴",
                weight: 28,
                quantity: 41,
                condition: "Good",
                source: "Supply Packaging",
                description: "Food-grade HDPE containers. Can be melted and reformed for new applications.",
                uses: ["Storage", "3D Printing", "Recycling"]
            },
            {
                id: 5,
                name: "Circuit Boards",
                category: "electronics",
                icon: "💾",
                weight: 19,
                quantity: 34,
                condition: "Mixed",
                source: "Equipment Salvage",
                description: "Various PCBs containing valuable metals and components. Requires processing.",
                uses: ["Metal Recovery", "Component Harvesting"]
            },
            {
                id: 6,
                name: "Titanium Components",
                category: "metals",
                icon: "⚙",
                weight: 203,
                quantity: 12,
                condition: "Excellent",
                source: "Rover Collection #9",
                description: "High-value titanium parts from spacecraft components. Excellent for critical applications.",
                uses: ["High-Stress Parts", "Medical Tools", "Construction"]
            },
            {
                id: 7,
                name: "Polycarbonate Sheets",
                category: "plastics",
                icon: "🪟",
                weight: 87,
                quantity: 18,
                condition: "Good",
                source: "Habitat Windows",
                description: "Transparent polycarbonate panels. Some scratching but structurally sound.",
                uses: ["Windows", "Shields", "Greenhouse"]
            },
            {
                id: 8,
                name: "Carbon Fiber Tubes",
                category: "composites",
                icon: "📏",
                weight: 56,
                quantity: 27,
                condition: "Excellent",
                source: "Rover Collection #11",
                description: "Lightweight carbon fiber structural elements. High strength-to-weight ratio.",
                uses: ["Structural", "Robotics", "Tools"]
            },
            {
                id: 9,
                name: "Silica Glass",
                category: "glass",
                icon: "💎",
                weight: 112,
                quantity: 45,
                condition: "Mixed",
                source: "Lab Equipment",
                description: "Various glass containers and components. Can be remelted and reformed.",
                uses: ["Lab Equipment", "Optics", "Recycling"]
            },
            {
                id: 10,
                name: "Stainless Steel Mesh",
                category: "metals",
                icon: "🕸",
                weight: 78,
                quantity: 31,
                condition: "Good",
                source: "Filtration Systems",
                description: "Fine mesh screening from water and air filtration units.",
                uses: ["Filtration", "Separation", "Reinforcement"]
            },
            {
                id: 11,
                name: "PVC Piping",
                category: "plastics",
                icon: "🚰",
                weight: 94,
                quantity: 52,
                condition: "Good",
                source: "Habitat Plumbing",
                description: "Various diameter PVC pipes and fittings. Clean and ready for reuse.",
                uses: ["Plumbing", "Structure", "Hydroponic Systems"]
            },
            {
                id: 12,
                name: "LED Components",
                category: "electronics",
                icon: "💡",
                weight: 12,
                quantity: 187,
                condition: "Mixed",
                source: "Lighting Systems",
                description: "LED chips and assemblies from various sources. Many still functional.",
                uses: ["Lighting", "Indicators", "Grow Lights"]
            },
            {
                id: 13,
                name: "Kevlar Fabric",
                category: "composites",
                icon: "🧵",
                weight: 43,
                quantity: 15,
                condition: "Good",
                source: "Protective Gear",
                description: "High-strength aramid fiber sheets. Excellent for reinforcement applications.",
                uses: ["Protection", "Reinforcement", "Repairs"]
            },
            {
                id: 14,
                name: "Iron Oxide Powder",
                category: "metals",
                icon: "🟤",
                weight: 234,
                quantity: 8,
                condition: "Excellent",
                source: "Regolith Processing",
                description: "Refined iron oxide from Martian regolith. Can be reduced to metallic iron.",
                uses: ["Smelting", "3D Printing", "Construction"]
            },
            {
                id: 15,
                name: "Acrylic Panels",
                category: "plastics",
                icon: "🖼",
                weight: 67,
                quantity: 22,
                condition: "Good",
                source: "Display Units",
                description: "Clear acrylic sheets from decommissioned displays and panels.",
                uses: ["Windows", "Displays", "Prototypes"]
            },
            {
                id: 16,
                name: "Lithium Batteries",
                category: "electronics",
                icon: "🔋",
                weight: 145,
                quantity: 38,
                condition: "Depleted",
                source: "Equipment Salvage",
                description: "Used lithium-ion cells. Valuable for lithium recovery and recycling.",
                uses: ["Lithium Recovery", "Recycling", "Research"]
            },
            {
                id: 17,
                name: "Fiberglass Insulation",
                category: "composites",
                icon: "🧊",
                weight: 89,
                quantity: 34,
                condition: "Good",
                source: "Habitat Insulation",
                description: "Thermal insulation material. Can be repurposed or recycled.",
                uses: ["Insulation", "Thermal Control", "Soundproofing"]
            },
            {
                id: 18,
                name: "Magnesium Alloy Parts",
                category: "metals",
                icon: "✨",
                weight: 76,
                quantity: 19,
                condition: "Excellent",
                source: "Rover Collection #8",
                description: "Lightweight magnesium alloy components. Ideal for applications requiring low weight.",
                uses: ["Lightweight Structures", "Tools", "Equipment"]
            },
            {
                id: 19,
                name: "Silicone Rubber",
                category: "plastics",
                icon: "⭕",
                weight: 45,
                quantity: 67,
                condition: "Good",
                source: "Seals & Gaskets",
                description: "Various silicone rubber components. Heat-resistant and flexible.",
                uses: ["Seals", "Gaskets", "Flexible Components"]
            },
            {
                id: 20,
                name: "Optical Lenses",
                category: "glass",
                icon: "🔍",
                weight: 23,
                quantity: 28,
                condition: "Mixed",
                source: "Cameras & Sensors",
                description: "Various optical lenses from imaging equipment. Some minor damage.",
                uses: ["Optics", "Sensors", "Research"]
            },
            {
                id: 21,
                name: "Epoxy Resin",
                category: "composites",
                icon: "🧪",
                weight: 38,
                quantity: 14,
                condition: "Good",
                source: "Repair Supplies",
                description: "Two-part epoxy adhesive. Stored properly and still usable.",
                uses: ["Bonding", "Repairs", "Sealing"]
            },
            {
                id: 22,
                name: "Ceramic Tiles",
                category: "glass",
                icon: "⬜",
                weight: 156,
                quantity: 89,
                condition: "Good",
                source: "Heat Shielding",
                description: "High-temperature ceramic tiles. Excellent thermal properties.",
                uses: ["Heat Shielding", "Insulation", "Lab Equipment"]
            },
            {
                id: 23,
                name: "Rubber O-Rings",
                category: "plastics",
                icon: "⭕",
                weight: 8,
                quantity: 342,
                condition: "Mixed",
                source: "Various Systems",
                description: "Assorted sizes of rubber O-rings and seals. Sorted by size.",
                uses: ["Sealing", "Repairs", "Maintenance"]
            },
            {
                id: 24,
                name: "Graphite Rods",
                category: "composites",
                icon: "📊",
                weight: 34,
                quantity: 23,
                condition: "Excellent",
                source: "Electrical Systems",
                description: "Pure graphite rods. Conductive and heat-resistant.",
                uses: ["Electrodes", "Lubrication", "Thermal Management"]
            }
        ];

        let currentFilter = 'all';
        let requestedItems = [];

        // Render inventory
        function renderInventory(items) {
            const grid = document.getElementById('inventoryGrid');
            
            if (items.length === 0) {
                grid.innerHTML = '<div class="no-results">No items found matching your criteria.</div>';
                return;
            }

            grid.innerHTML = items.map(item => `
                <div class="item-card" data-category="${item.category}">
                    <div class="item-header">
                        <div class="item-icon">${item.icon}</div>
                        <span class="category-badge category-${item.category}">${item.category.toUpperCase()}</span>
                    </div>
                    <h3 class="item-title">${item.name}</h3>
                    <div class="item-details">
                        <div class="detail-row">
                            <span class="detail-label">Weight:</span>
                            <span class="detail-value">${item.weight} kg</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Quantity:</span>
                            <span class="detail-value">${item.quantity} units</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Condition:</span>
                            <span class="detail-value">${item.condition}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Source:</span>
                            <span class="detail-value">${item.source}</span>
                        </div>
                    </div>
                    <p class="item-description">${item.description}</p>
                    <button class="request-btn" onclick="requestItem(${item.id}, '${item.name}')">
                        Request Material
                    </button>
                </div>
            `).join('');
        }

        // Filter functionality
        function filterItems(category) {
            currentFilter = category;
            const searchTerm = document.getElementById('searchBox').value.toLowerCase();
            
            let filtered = inventoryData;
            
            if (category !== 'all') {
                filtered = filtered.filter(item => item.category === category);
            }
            
            if (searchTerm) {
                filtered = filtered.filter(item => 
                    item.name.toLowerCase().includes(searchTerm) ||
                    item.description.toLowerCase().includes(searchTerm) ||
                    item.category.toLowerCase().includes(searchTerm)
                );
            }
            
            renderInventory(filtered);
        }

        // Search functionality
        document.getElementById('searchBox').addEventListener('input', (e) => {
            filterItems(currentFilter);
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                filterItems(e.target.dataset.category);
            });
        });

        // Request item
        function requestItem(id, name) {
            if (!requestedItems.includes(id)) {
                requestedItems.push(id);
                updateCart();
                alert("✅ Request submitted for: ${name}\n\nYour request has been logged and is pending approval.");
            } else {
                alert("ℹ You have already requested: ${name}");
            }
        }

        // Update cart
        function updateCart() {
            document.getElementById('cartCount').textContent = requestedItems.length;
        }

        // Cart click
        document.getElementById('cart').addEventListener('click', () => {
            if (requestedItems.length === 0) {
                alert('🛒 Your request cart is empty.\n\nBrowse the catalog and request materials you need!');
            } else {
                const requestedNames = requestedItems.map(id => {
                    const item = inventoryData.find(i => i.id === id);
                    return item ? item.name : '';
                }).join('\n• ');
                
                alert("🛒 Your Requested Materials:\n\n• ${requestedNames}\n\nTotal: ${requestedItems.length} items");
            }
        });

        // Initialize
        renderInventory(inventoryData);
