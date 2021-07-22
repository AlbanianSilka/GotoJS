var Cat = function(name, age) {
    this.name = name;
    this.age = age;

};

var alex = new Cat('Alex', 2);


console.log(alex.name);

Cat.prototype = {
    walk: function() {
        console.log(this.name + ' ходит по комнате')
    }
};

// Это не сработает с котом Alex, так-как он был создан ещё до того, 
// как в Cat был добавлен прототип walk
var bob = new Cat('Bob', 3);
bob.walk();

var EmailClient = function() {
    this.getPost = function() {
        console.log('I got an email!')
    }

    this.sendPost = function() {
        console.log('I send an email!')
    }
};

var GmailClient = function() {
};

GmailClient.prototype = new EmailClient();

var OutlookClient = function() {
    this.sendToThread = function() {
        console.log('I have send an email to thread!')
    }
};

OutlookClient.prototype = new EmailClient();

const gmail = new GmailClient();
const outlook = new OutlookClient();

gmail.sendPost();
outlook.sendToThread();