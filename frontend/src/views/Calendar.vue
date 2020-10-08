<template>
<div class="calendar">
 <header>
    <h1>November 2017</h1>
  </header>

  <ul class="weekdays">
    <li>
      <abbr title="S">Sunday</abbr>
    </li>
    <li>
      <abbr title="M">Monday</abbr>
    </li>
    <li>
      <abbr title="T">Tuesday</abbr>
    </li>
    <li>
      <abbr title="W">Wednesday</abbr>
    </li>
    <li>
      <abbr title="T">Thursday</abbr>
    </li>
    <li>
      <abbr title="F">Friday</abbr>
    </li>
    <li>
      <abbr title="S">Saturday</abbr>
    </li>
  </ul>

  <ul class="day-grid">
    <li class="month=prev">29</li>
    <li class="month=prev">30</li>
    <li class="month=prev">31</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li class="month-next">1</li>
    <li class="month-next">2</li>
  </ul>
</div>
</template>

<script>
import * as moment from 'moment/moment';

export default {
  name: 'calendar',
  data() {
    return {
      today: moment(),
      dateContext: moment(),
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
  },
  computed: {
    year() {
      const t = this;
      return t.dateContext.format('Y');
    },
    month() {
      const t = this;
      return t.dateContext.format('MMMM');
    },
    daysInMonth() {
      const t = this;
      return t.dateContext.daysInMonth();
    },
    currentDate() {
      const t = this;
      return t.dateContext.get('date');
    },
    firstDayOfTheMonth() {
      const t = this;
      const firstDay = moment(t.dateContext).suntract((t.currentDate - 1), 'days');
      return firstDay.weekday();
    },
    initialDate() {
      const t = this;
      return t.today.get('date');
    },
    initialMonth() {
      const t = this;
      return t.today.format('MMMM');
    },
    intitialYear() {
      const t = this;
      return t.today.format('Y');
    },
  },
  methods: {
    addMonth() {
      const t = this;
      t.dateContext = moment(t.dateContext).add(1, 'month');
    },
    subtractMonth() {
      const t = this;
      t.dateContext = moment(t.dateContext).subtract(1, 'month');
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
  background: #000;
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
  background-color: #eaeaea;
  border: 1px solid #eaeaea;
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
