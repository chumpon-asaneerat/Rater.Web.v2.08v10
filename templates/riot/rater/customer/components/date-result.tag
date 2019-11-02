<date-result>
    <div class="date-range">
        <span class="label">Date:&nbsp;</span>
        <span class="text">2019-10-11</span>
        <span class="text">&nbsp;-&nbsp;</span>
        <span class="text">2019-10-12</span>
    </div>
    <style>
        :scope {
            margin: 0 auto;
            padding: 0;
            width: 100%;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 270px 1fr;
            grid-template-areas: 
                '. date-range .';
        }
        :scope .date-range {
            grid-area: date-range;
            margin: 0 auto;
            padding: 0;
            width: 100%;
        }
        :scope .date-range .label {
            color: navy;
        }
        :scope .date-range .text {
            color: black;
        }
    </style>
    <script></script>
</date-result>