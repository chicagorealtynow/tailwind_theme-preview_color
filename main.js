const colors = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime',
  'green', 'emerald', 'teal', 'cyan', 'sky',
  'blue', 'indigo', 'violet', 'purple', 'fuchsia',
  'pink', 'rose'
];

let primaryColor = 'blue';
let secondaryColor = 'gray';
let accentColor = 'indigo';

// Initialize Lucide icons
lucide.createIcons();

// Populate color dropdowns
function populateDropdowns() {
  const dropdowns = ['primaryColor', 'secondaryColor', 'accentColor'];
  dropdowns.forEach(id => {
    const select = document.getElementById(id);
    colors.forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color;
      select.appendChild(option);
    });
    select.value = eval(id); // Set default value
  });
}

// Update preview section
function updatePreview() {
  const previewSection = document.getElementById('previewSection');
  previewSection.className = `bg-${secondaryColor}-50 p-6 rounded-lg shadow-lg space-y-6`;
  
  previewSection.innerHTML = `
    <nav class="bg-${primaryColor}-600 p-4 rounded-lg flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <span class="text-white font-bold text-xl">Logo</span>
        <div class="bg-${primaryColor}-500 text-white px-4 py-2 rounded">Home</div>
        <div class="text-white/80">Products</div>
        <div class="text-white/80">About</div>
      </div>
      <div class="flex items-center space-x-4 text-white">
        <i data-lucide="bell"></i>
        <i data-lucide="user"></i>
      </div>
    </nav>

    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-1 space-y-4">
        <div class="bg-white p-4 rounded-lg shadow border-l-4 border-${primaryColor}-500">
          <h3 class="text-${primaryColor}-700 font-semibold">Dashboard</h3>
        </div>
        <div class="bg-white p-4 rounded-lg shadow border-l-4 border-${secondaryColor}-300">
          <h3 class="text-${secondaryColor}-700 font-semibold">Analytics</h3>
        </div>
      </div>

      <div class="col-span-2 space-y-4">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-${primaryColor}-800 text-xl font-bold mb-4">Welcome Back</h2>
          <p class="text-${secondaryColor}-600 mb-4">
            This is a sample layout to preview your color scheme.
          </p>
          <button class="bg-${primaryColor}-600 text-white px-4 py-2 rounded hover:bg-${primaryColor}-700">
            Get Started
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-${accentColor}-100 p-4 rounded-lg">
            <h3 class="text-${accentColor}-800 font-semibold mb-2">Feature 1</h3>
            <p class="text-${accentColor}-600 text-sm">Description text here</p>
          </div>
          <div class="bg-${accentColor}-100 p-4 rounded-lg">
            <h3 class="text-${accentColor}-800 font-semibold mb-2">Feature 2</h3>
            <p class="text-${accentColor}-600 text-sm">Description text here</p>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-${primaryColor}-800 text-white p-4 rounded-lg mt-6 text-center">
      Footer Content
    </footer>
  `;
  
  // Reinitialize Lucide icons after updating the content
  lucide.createIcons();
}

// Event listeners
document.getElementById('primaryColor').addEventListener('change', (e) => {
  primaryColor = e.target.value;
  updatePreview();
});

document.getElementById('secondaryColor').addEventListener('change', (e) => {
  secondaryColor = e.target.value;
  updatePreview();
});

document.getElementById('accentColor').addEventListener('change', (e) => {
  accentColor = e.target.value;
  updatePreview();
});

// Initialize the page
populateDropdowns();
updatePreview();