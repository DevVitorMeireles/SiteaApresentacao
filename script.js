// Gráfico 1: Gráfico de Barras - Vendas Mensais
function drawBarChart() {
  const canvas = document.getElementById("chart1");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const data = [45, 62, 58, 75, 82, 90, 88, 95, 102, 98, 110, 115];
  const labels = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const maxValue = Math.max(...data) * 1.1;

  const padding = 50;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  const barWidth = chartWidth / data.length - 10;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  data.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight;
    const x = padding + index * (chartWidth / data.length) + 5;
    const y = canvas.height - padding - barHeight;

    const gradient = ctx.createLinearGradient(0, y, 0, canvas.height - padding);
    gradient.addColorStop(0, "#667eea");
    gradient.addColorStop(1, "#764ba2");

    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(labels[index], x + barWidth / 2, canvas.height - padding + 20);
    ctx.fillText(value, x + barWidth / 2, y - 5);
  });
}

// Gráfico 2: Gráfico de Pizza - Distribuição
function drawPieChart() {
  const canvas = document.getElementById("chart2");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const data = [30, 25, 20, 15, 10];
  const labels = ["Eletrônicos", "Roupas", "Alimentos", "Livros", "Outros"];
  const colors = ["#667eea", "#f093fb", "#4facfe", "#43e97b", "#fa709a"];

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 60;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let currentAngle = -Math.PI / 2;
  const total = data.reduce((a, b) => a + b, 0);

  data.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = colors[index];
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    const labelAngle = currentAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
    const labelY = centerY + Math.sin(labelAngle) * (radius + 30);

    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(labels[index], labelX, labelY);
    ctx.fillText(value + "%", labelX, labelY + 15);

    currentAngle += sliceAngle;
  });
}

// Gráfico 3: Gráfico de Linha - Satisfação
function drawLineChart() {
  const canvas = document.getElementById("chart3");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const data = [7.5, 8.0, 7.8, 8.5, 8.8, 9.0, 8.7, 9.2, 9.5, 9.3, 9.6, 9.8];
  const labels = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const padding = 50;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  const maxValue = 10;
  const minValue = 7;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padding + (chartHeight / 5) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(canvas.width - padding, y);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.strokeStyle = "#43e97b";
  ctx.lineWidth = 3;

  data.forEach((value, index) => {
    const x = padding + (chartWidth / (data.length - 1)) * index;
    const y =
      canvas.height -
      padding -
      ((value - minValue) / (maxValue - minValue)) * chartHeight;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  data.forEach((value, index) => {
    const x = padding + (chartWidth / (data.length - 1)) * index;
    const y =
      canvas.height -
      padding -
      ((value - minValue) / (maxValue - minValue)) * chartHeight;

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#38d39f";
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(labels[index], x, canvas.height - padding + 20);
  });
}

// Gráfico 4: Gráfico de Barras Horizontais - Crescimento Trimestral
function drawHorizontalBarChart() {
  const canvas = document.getElementById("chart4");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const data = [12, 18, 15, 22];
  const labels = ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"];
  const maxValue = 25;

  const padding = 100;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  const barHeight = chartHeight / data.length - 20;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#e0e0e0";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const x = padding + (chartWidth / 5) * i;
    ctx.beginPath();
    ctx.moveTo(x, padding);
    ctx.lineTo(x, canvas.height - padding);
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.font = "11px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      ((maxValue / 5) * i).toFixed(0) + "%",
      x,
      canvas.height - padding + 25
    );
  }

  data.forEach((value, index) => {
    const barWidth = (value / maxValue) * chartWidth;
    const x = padding;
    const y = padding + index * (chartHeight / data.length) + 10;

    const gradient = ctx.createLinearGradient(x, 0, x + barWidth, 0);
    gradient.addColorStop(0, "#fa709a");
    gradient.addColorStop(1, "#fee140");

    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = "#000";
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "right";
    ctx.fillText(labels[index], padding - 15, y + barHeight / 2 + 5);

    ctx.textAlign = "left";
    ctx.font = "bold 14px Arial";
    if (barWidth > 50) {
      ctx.fillStyle = "#000";
      ctx.fillText(value + "%", x + 10, y + barHeight / 2 + 5);
    } else {
      ctx.fillStyle = "#000";
      ctx.fillText(value + "%", x + barWidth + 10, y + barHeight / 2 + 5);
    }
  });

  ctx.fillStyle = "#000";
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Taxa de Crescimento (%)", canvas.width / 2, canvas.height - 10);
}

// Inicializar todos os gráficos
window.addEventListener("load", () => {
  drawBarChart();
  drawPieChart();
  drawLineChart();
  drawHorizontalBarChart();
});

// Redesenhar gráficos ao redimensionar a janela
window.addEventListener("resize", () => {
  drawBarChart();
  drawPieChart();
  drawLineChart();
  drawHorizontalBarChart();
});
