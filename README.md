Kiss Metrics Code Challenge
===========================

## Description

Feel free to use any JS frameworks/components of your choice.

1. I've put a sample data set here: https://gist.github.com/percyhanna/55dfd1feaab13d98c901
2. Create a sortable table that represents the dataset
3. Add an "Edit" button to each row that would allow a user to edit the row's data in separate form below the table
4. Clicking "Save" in the form would update the record in the table


## Solution

I was trying to balance engineering and aesthetics vs. getting this out the door. As such here are some reasonable justifications (hopefully) for my decisions:

* I opted to be able to edit the row inline rather than having the form at the bottom of the table. I feel that it provides a better user experience as opposed to scrolling back and forth.
* I could have simply written this as a jQuery plugin or some vanilla modules but decided to use CanJS to get nice templating and live binding. Probably overkill for this to be honest, and in hindsight a jQuery plugin or standalone component would have been sufficient.
* I initially started to create a build and use bower but that is overkill for this particular challenge and if someone else were to pick it up, IMO the simpler and more vanilla the solution the better.
* Rather than ajaxing in the sample data or creating a proper model I decided to just load it as a JS script and throw it in globally. Not what I would do in a real system but having a whole model setup or a build system just to load the data seemed like overkill again.
* I ran into some issues where the `.sort()` is not triggering a `change` event on the List. Possibly a bug in CanJS. So I needed to re-render the whole list manually a second time. Hence, why sorting is a little sluggish. Sucky!
* I added some [FuncUnit](http://funcunit.com/) tests because:
    1. Testing user interaction generally uncovers more bugs faster than unit tests
    2. I've never used FuncUnit before and wanted an excuse

## What would I improve

* Add icons to indicate which direction things are sorted and on what field
* Probably use [reactive](https://github.com/component/reactive) instead because it is faster and lighter weight.
* Make the component a bit more self-contained and modular. (ie. templates, exposed better)
* Make existing tests less fragile
* Add unit tests