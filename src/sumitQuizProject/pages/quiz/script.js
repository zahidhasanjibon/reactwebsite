document.querySelector('.floatingBtn').addEventListener(
    'click',
    // eslint-disable-next-line func-names
    function () {
        this.classList.remove('floatingBtn');
        console.log('jibopn');
    },
    true
);

document.querySelector('.miniPlayer .close').addEventListener(
    'click',
    () => {
        document.querySelector('.miniPlayer').classList.add('floatingBtn');
    },
    true
);

// tooptip
document.querySelector('.progress').addEventListener(
    'mouseover',
    () => {
        document.querySelector('.tooltip').style.display = 'block';
    },
    true
);

document.querySelector('.progress').addEventListener(
    'mouseout',
    () => {
        document.querySelector('.tooltip').style.display = 'none';
    },
    true
);
