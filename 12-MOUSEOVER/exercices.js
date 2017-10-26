//exercie 1

document.querySelectorAll('.hoverMe').forEach((element) => {
  element.addEventListener('mouseover',(event) => {
    event.target.style.opacity = 0;
        });
});

//exercie 2

document.getElementsByTagName('reset').addEventListener('mouseover',(event) => {
    document.querySelectorAll('.hoverMe').forEach((element)  => {
        event.style.opacity=1;

        });
});
