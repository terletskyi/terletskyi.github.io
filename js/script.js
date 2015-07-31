var holder = document.getElementById('holder');

var randVal = function(arr) {
    if (typeof arr !== 'object') {
        return arr;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

var generateText = function() {
    var text = (function() {
        var rnd = (function() {
            var rnd = function() {
                return parseInt(Math.random() * 2)
            };
            var res = 0;
            while (res < 5) {
                res = rnd();
            };
            return res;
        })();

        var res = [];

        res.pushItem = function(type) {
            var item = randVal(data[type]);

            if (-1 === this.indexOf(item)) {
                this.push(item);
            }
        };

        for (i = 0; i < rnd; i++) {
            res.pushItem('pronoun');
            res.pushItem('verb');
            res.pushItem('adjective');
            res.pushItem('noun');
            res.pushItem('conjunction');
            res.pushItem('noun');
            res.pushItem('.');
        }
        return res;
    })().join(' ')
        .replace(/\s\,/g, ',')
        .replace(/\s\./g, '.')
        .replace(/^\s+/, '')
        .replace(/[\.|\W|\s]+$/, '')
        .split('. ').map(function(item){
            return item.slice(0,1).toUpperCase()+item.slice(1);
        }).join('. ')
    +'.';

    holder.innerText = text;
};
