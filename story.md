
## Where did it all start?

I wanted to know, does $ symbol currently represent the jQuery
library in a small web app (piece of JavaScript -peppered
web document).

Found out testing for that isn't such a *straight-forward*
thing. For non-JavaScripters out there: even though absurd,
there's nothing special about overloading dollar-sign to represent
a software library. JavaScript is very permissive.

## Intro: Why should a Javascript program care about loaded modules?

As programmers, we use modules (Javascript calls these 'packages')
to achieve greater efficiency and better conformance to
standards. It's the old "don't reinvent the wheel" wisdom.
Ruby programmers have 'DRY' (Don't repeat yourself). The principle
is basically universal. C and Java languages had a fairly
standard set of libraries, whereas JavaScript being a rather
lightly standardized and minimal, has a vast amount of 3rd
party librarise mushrooming around every day. Whereas in
the golden days of Java you might be expecting to see perhaps
a couple of new frameworks a year, with JavaScript the pace
is 100 times that.

JavaScript as a language struggled for long time in
certain basic areas of programming language; it did not
have a proper way to load other scripts (called "include"
or "use" in many other languages). The patch solution
was roll-it-yourself, ie. the JS community got around
this by applying bit patchy and kludgy tech all over again.

That is probably also one of the reasons that the "repository"
of shared Javascript code is filled with literally hundreds of
thousands of packages. There are really great gems; not so great
ones, totally obscures; there are jokes, probably malware,
and everything in between.

As a professional programmer you might be facing some situation
which requires you to know your stuff. These project phases
include:
- technology evaluation
- refactoring
- security improvements
- fixing a small, medium, large or XL bug

Yesterday, the count of packages in Npm's repository was
416162. The number grows an average by 570 per day (by
site "Modulecounts").

## How are packages identified?

The testing methodology is
basically fingerprinting: checking presence of
known attribute (object keys) and their 'typeof'.

Of course the easiest way would be that a package
had similar ID as, say, network interface cards have
in the computer. These are address pools allocated for
a manufacturer, and the NIC reports this identity as
the MAC address. It is burned in to the ROM memory.

## Isn't the package identification just overkill fuss?

Maybe.

## How does 'typeof' keyword in JavaScript work?

The 'typeof' operator returns a String, which indicates
one of 8 documented values:

"undefined"
"object"
"boolean"
"number"
"string"
"symbol"
"function"

Or, for any other kind of object, "object"

In addition, there is 1 implementation-dependent
interpretation.

Fingerprinting probably began in computer networks.
There packets (for example, TCP packets) have header
information (fields), which can be quite easily used
to identify the type of traffic ongoing.


- namespace clash
- prevent accidentally referring to undefined (null) symbol
- debugging and performance management
- possibly obscure Use Cases ? Still out there whether it makes
  any sense to do package sniffer "except for fun(TM)"
