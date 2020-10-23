<template>
  <div class="calendar">
    <div class="calendar-header">
      <a @click="subtractMonth()">
        <i class="fa fa-chevron-left fa-fw"></i>
      </a>
      <h4>{{month + ' - ' + year}}</h4>
      <a @click="addMonth()">
        <i class="fa fa-chevron-right fa-fw"></i>
      </a>
    </div>

    <ul class="weekdays">
        <li v-for="day in days" :key="day.id">
          {{ day }}
        </li>
    </ul>

    <ul class="day-grid dates">
      <li v-for="blank in firstDayOfMonth" :key="blank.id"></li>
      <li v-for="date in daysInMonth" :key="date.id"
      :class="{'current-day': date == initialDate &&
      month == initialMonth && year == initialYear}">
        <span>{{ date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import * as moment from 'moment/moment';

export default {
  data() {
    return {
      today: moment(),
      dateContext: moment(),
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
  },
  computed: {
    year() {
      return this.dateContext.format('Y');
    },
    month() {
      return this.dateContext.format('MMMM');
    },
    daysInMonth() {
      return this.dateContext.daysInMonth();
    },
    currentDate() {
      return this.dateContext.get('date');
    },
    firstDayOfMonth() {
      const firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days');
      return firstDay.weekday();
    },
    initialDate() {
      return this.today.get('date');
    },
    initialMonth() {
      return this.today.format('MMMM');
    },
    initialYear() {
      return this.today.format('Y');
    },
  },
  methods: {
    addMonth() {
      this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    subtractMonth() {
      this.dateContext = moment(this.dateContext).subtract(1, 'month');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
  justify-content: center;
  margin-bottom: 2em;
  background: rgb(44, 28, 28);
  color: #fff;
  min-height: 10vh;
  text-align: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
  margin: 0 auto;
  max-width: 64em;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  font-size: calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)));
}

ul.weekdays {
  margin-bottom: 1em;
}

ul.weekdays li {
  height: 4vw;
}

ul.day-grid li {
  background-color: whitesmoke;
  border: 1px solid black;
  height: 12vw;
  max-height: 125px;
}

ul.weekdays abbr[title] {
  border: none;
  font-weight: 800;
  text-decoration: none;
}

ul.day-grid li:nth-child(1),
ul.day-grid li:nth-child(2),
ul.day-grid li:nth-child(3),
ul.day-grid li:nth-child(34),
ul.day-grid li:nth-child(35) {
  background-color: #fff;
}

@media all and (max-width: 800px) {
  ul {
    grid-gap: .25em;
  }

  ul.weekdays li {
    font-size: 0;
  }

  ul.weekdays > li abbr:after {
      content: attr(title);
      font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
    text-align: center;
    }
}

</style>
