const onInputSingle = (parent, e) => {
    const input = parent.querySelector(".range-single");
    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
    const value = parseFloat(input.value);

    // Tính phần trăm để vẽ dải màu
    const percentage = ((value - min) / (max - min)) * 100;
    parent.style.setProperty("--range-slider-value", `${percentage}%`);

    // Cập nhật hiển thị
    const displayElement = parent.querySelector(".range-slider-display");
    if (displayElement) {
        displayElement.textContent = `${value.toLocaleString()} €`;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".range-slider").forEach((range) => {
        const input = range.querySelector("input.range-single");
        if (input) {
            input.addEventListener("input", (e) => onInputSingle(range, e));
            onInputSingle(range);
        }
    });
});
