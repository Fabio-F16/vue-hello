const app = new Vue({

    el: '#root',
    data: {
        title: 'Ciao Vue JS',
        red: 'color-red',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Chimpanzee-Head.jpg',
        classImg: 'classImg',
    },
    methods: {
        alert: function () {
            alert('ahia');
            console.log('mi hai premuto :-(')
        }
    }



})