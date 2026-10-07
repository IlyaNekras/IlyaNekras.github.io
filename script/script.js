'use strict'
document.addEventListener('DOMContentLoaded', () => {
    (function () {
        const previews = document.querySelectorAll('.card-preview');
        previews && previews.forEach(preview => {
            preview.addEventListener('click', () => {
                previews.forEach(preview => preview.classList.remove('active'));

                const originalImg = preview.dataset.original;
                const img = preview.querySelector('img');
                const titleImg = img.getAttribute('alt') != '' ? img.getAttribute('alt') :
                    img.getAttribute('title') ? img.getAttribute('title') : 'Ананасовый улун';

                document.querySelector('.card-img').innerHTML =
                    `<img src="${originalImg}" alt="${titleImg}" title="${titleImg}" width="400" height="400" />`;

                preview.classList.add('active');
            });
        });
    })();

    tabs('.variants');
});

function tabs(block) {
    const tabs = document.querySelectorAll(`${block} .tab`);
    const contents = document.querySelectorAll(`${block} .tab-content`);

    tabs && tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const dataTab = tab.dataset.tab;
            tabs.forEach(tab => tab.classList.remove('active'));

            contents && contents.forEach(content => {
                const dataContent = content.dataset.content;
                content.classList.remove('active');
                if (dataContent == dataTab) {
                    tab.classList.add('active');
                    content.classList.add('active');
                }
            });
        });
    });
}