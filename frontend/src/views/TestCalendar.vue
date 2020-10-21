        <div class="calendar-header">
            <i class="fa fa-fw fa-chevron-left" @click="subtractMonth"></i>
            <h4>{{month + ' - ' + year}}</h4>
            <i class="fa fa-fw fa-chevron-right" @click="addMonth"></i>
        </div>
        <ul class="weekdays">
            <li v-for="day in days" :key="day.id"></li>
        </ul>
        <ul class="dates">
            <li v-for="blank in firstDayOfMonth" :key="blank.id"></li>
            <li v-for="date in daysInMonth" :key="date.id"
            :class="{'current-day': date == initialDate &amp;&amp;
            month == initialMonth && year == initialYear}">;
                <span></span>
           </li>
        </ul>
