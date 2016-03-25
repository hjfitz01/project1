angular.module('eventsPage', [])
  .controller('EventsController', function() {
    var events = this;
    events.list = [
        {
            date: '4/1/16',
            name: 'Water Balloon Fight at Cherokee'

        },
        {
            date:'4/5/16',
            name:'5k Run at Waterfront Park'

        },
        {
            date:'4/6/16',
            name:'Coda-pa-LOUsa'

        },
        {
            date:'4/9/16',
            name:'Dog Run at Seneca Park'

        },
        {
            date:'4/10/16',
            name:'Local Bluegrass Meetup at Marriott East'

        },
        {
            date:'4/10/16',
            name:'Business First Banquet at Louisville Convention Center'

        },
        {
            date:'4/13/16',
            name:'LARP at Cherokee'

        },
        {
            date:'4/16/16',
            name:'Dungeons and Dragons Tournament at GameDevLou'

        },
        {
            date:'4/17/16',
            name:'Pokemon Tournament at Barnes and Noble'

        },
        {
            date:'4/18/16',
            name:'HallehLOUyah at South East Christian'

        },
        {
            date:'4/20/16',
            name:'Green Thumb Club at Waterfront'

        },
        {
            date:'4/21/16',
            name:'Disco Party at Play'

        },
        {
            date:'4/25/16',
            name:'$5 Drink Specials at Copper & Kings'

        },
        {
            date:'4/26/16',
            name:'DDR Competition at Wicks on Bardtown Rd'

        },
        {
            date:'4/26/16',
            name:'Band Face Off at Moms Music'

        },
        {
            date:'4/29/16',
            name:'Half Off App Special at Outback Steakhouse'

        },
        {
            date:'4/29/16',
            name:'Planting Flowers at Nanz & Kraft'

        },
        {
            date:'4/30/16',
            name:'Lonely Planet Public Speaking at Ekstrom Library'

        },
        {
            date:'4/31/16',
            name:'Hippie Retreat at Red River Gorge'

        }
    ];

    events.setCurrentPage=function(page){
        var offset = page * 5;
        this.currentEvents = this.list.slice(offset, offset+5);
    };
    
    events.setCurrentPage(0);
    console.log(events.currentEvents);
  });