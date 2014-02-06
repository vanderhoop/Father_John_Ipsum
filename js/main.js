var App = {};
App.lyrics = ["Oh pour me another drink And punch me in the face You can call me Nancy Every man wears a symbol And I know I have mine I've got my right hand stamped In the concentration camp where my organs scream 'slow down, old man!' Flowers and bows Milk and honey flow Just a couple states below Oh hook me up to the tank And roll me to the door I'm going where my body leads me I can fend for myself With what looks I have left I'll put away a few And pretty soon I'll be breaking things like Howard Hughes Flowers and bows Milk and honey flow Just a couple states below Forgive me how it was A place under the sun Before the devil made me run Run boy, run boy",
  "If you see a flaming sword in your dreams at night And feel inspired to assign me up to the front line Well give the order, you'll storm the border without me If they tell you you're a genius but you need some proof Ask anybody on the payroll to go out with you If they avoid ya, then they'll award ya definitely Nobody that's around just seems to get it right How hard is it to follow just a few guidelines And smile while you do it If you want a page written 'bout you in the book But you need a food tester 'cause you cursed the cook I'll take some wine but you can dine without me Without me Who would let you play God And make-believe that all the blasphemy Is coming only from me? If you're bound for the throne but the king won't die I can occupy the queen but that's for her and I I can do her and you'll be ruler without me Yeah you can do it But you can do it without me",
  "Fun times in Babylon That's what I'm counting on Before the dam goes up at the foot of the sea Before the new wing of the prison ribbon ceremony Before the star of the morning comes looking for me I would like to abuse my lungs Smoke everything in sight with every girl I've ever loved Ride around the wreckage on a horse knee-deep in mud Look out Hollywood, here I come Fun times in Babylon Momma they've just begun Before they put me to work in a government camp Before they do my face up like a corpse and say 'get up and dance' Before the beast comes looking for last year's rent I would like to abuse my lungs Smoked everything in sight with every girl I've ever loved Ride around my wreckage on a horse knee-deep in mud Look out Hollywood, here I come Look out Hollywood, here I come Look out Hollywood, here I come",
  "Jesus Christ, girl What are people gonna think When I show up to one of several funerals I've attended for grandpa this week With you With me Someone's got to help me dig Someone's got to help me dig Jesus Christ, girl It hasn't been long so it seems Since I was picking out an island and a tomb for you At the Hollywood Cemetery You kiss On me We should let this dead guy sleep We should let this dead guy sleep Jesus Christ, girl I laid up for hours in a daze Retracing the expanse of your American back With Adderall and weed in my veins You came I think Cause the marble made my cheeks look pink But I'm unsure of so many things Someone's got to help me dig Someone's got to help me dig Someone's got to help me dig",
  "When I heard the ladiesman was dead I saw the rolling stone stopped moving Saw my ancient hero on the Sunset Strip He left behind a legacy of ruin Now painted ladies want to hold my gun Wonder if the whole time if I'd been acting When I sang 'Moon River' in that silent film Had I really made a sound when they called action I swear that man was womankind's first husband They all died in a line to save him I'm a steady hand, I'm a Dodger's fan I'm a leaning brand of a one night stand I'm a ladiesman Oh some ladiesman Oh some ladiesman Couldn't see his used up body at the funeral By virtue of the flailing of his conquests They tied down his casket with the garter belt Each troubled heart was beating in a sequin dress Someone must console these lonesome daughters No written word or ballad will appease them Cowboy and the cop shot down the ladiesman The humid nights in LA are now silence I swear that man was womankind's first husband Only son of the ladiesman Only son of the ladiesman Only son of the ladiesman"
 ]

 // taken from Underscore.js
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

$( document ).ready(function() {
  console.log("document: ready");
  $("#generate-button").on("click", function(){
    console.log("on click working");
    rand_index = random(0, App.lyrics.length - 1);
    $("#ipsum-field").val(App.lyrics[rand_index]);
  }); // on click of #generate-button
});
