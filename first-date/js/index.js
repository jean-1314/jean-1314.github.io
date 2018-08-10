new Vue({
  el: '#vue-app',
  data() {
    return {
      incorrectMovieName: 'Калифорния не вам Тут',
      dateInfo: {
        // Подсказка: порядковый номер первого элемента массива - ноль
        months: ['April', 'July', 'October', 'December'], 
        day: (100 - 23) / 11, 
        // Подсказка: функция Math.sqrt() извлекает квадратный корень
        year: 2 * 20 * 50 + Math.sqrt(144),
      },
      dateOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    };
  },
  computed: {
    getDate() {
      return new Date(`${this.dateInfo.months[2]} ${this.dateInfo.day}, ${this.dateInfo.year}`).toLocaleString("ru", this.dateOptions);
    },
    getMovieName() {
      // Подсказка: обратите внимание на название функции reverse()
      return this.incorrectMovieName.split(' ').reverse().join(' ');
    },
  },
});