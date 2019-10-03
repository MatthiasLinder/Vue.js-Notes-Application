var app = new Vue({

            el: '#root',

            data: {

                title: 'Vue.js Notes App',
                note: {

                    name: '',
                    text: '',
                },

                notes: [{
                    name: 'Vue.js Notes App',
                    text: 'Minimal Notes',

                }]

            },



            mounted() {

                if (localStorage.getItem('notes')) this.notes = JSON.parse(localStorage.getItem('notes'));

            },



            watch: {
                notes: {

                    handler() {

                        localStorage.setItem('notes', JSON.stringify(this.notes));

                    },
                    deep: true,

                },
            },



            methods: {

                add() {

                    let {
                        name, text, title, color
                    } = this.note

                    this.notes.push({
                        name,
                        text,
                    })

                    this.note.name = "";
                    this.note.text = "";

                },

                remove(index) {
                    this.$delete(this.notes, index)
                },
            },

});
