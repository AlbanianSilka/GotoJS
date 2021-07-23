const ConcertUA = function(concert, price, id) {
    this.concert = concert;
    this.price = price;
    this.id = id;

    all_concerts = []
    all_events = {}
    my_tickets = {}

    this.create_concert = (concert) => {
        all_concerts.push(concert);
    };

    this.createEvent = (concert, price) => {
        if (all_concerts.includes(concert)) {
            all_events[concert] = price;
            console.log(all_events)
        }
        else {
            console.log('Такой группы пока что нет в списке концертов.')
        }
    };

    this.buyTicket = (concert, id) => {
        if (concert in all_events) {
            my_tickets[id] = concert;
            console.log(my_tickets)
        }
        else {
            console.log('Такой группы пока что нет в списке концертов.')
        }
    };

    this.returnTicket = (id) => {
        if (id in my_tickets) {
            delete my_tickets[id];
            console.log(my_tickets);
        }
        else {
            console.log('Билета с таким айди не существует');
        }
    };
};

const ticketWindow = new ConcertUA();

ticketWindow.create_concert('Prodigy');
ticketWindow.create_concert('Moby');

ticketWindow.createEvent('Prodigy', 500);
ticketWindow.createEvent('Chemical Brothers', 300);
ticketWindow.createEvent('Moby', 200);

ticketWindow.buyTicket('Prodigy', 111);
ticketWindow.buyTicket('Moby', 222);

ticketWindow.returnTicket(222);