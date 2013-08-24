(function () {
    "use strict";

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    // TODO: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    generateSampleData().forEach(function (item) {
        list.push(item);
    });

    WinJS.Namespace.define("Data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        for (var i = 0; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference)
    {
        for (var i = 0; i < groupedItems.length; i++)
        {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1])
            {
                return item;
            }
        }
    }

    // Returns an array of sample data that can be added to the application's
    // data list. 
    function generateSampleData()
    {
        var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";
        var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
        var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";

        // These three strings encode placeholder images. You will want to set the
        // backgroundImage property in your real data to be URLs to images.
        var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
        var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
        var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

        var engineImage = "http://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Colorized_car_engine.jpg/220px-Colorized_car_engine.jpg";
        var lamboLogo = "http://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/180px-Lamborghini_Logo.svg.png";
        

        // Each of these sample groups must have a unique key to be displayed
        // separately.
        var sampleGroups = [
            { key: "article1", title: "Internal combustion engine", subtitle: "An article for engines", backgroundImage: engineImage, description: groupDescription },
            { key: "article2", title: "Lamborghini", subtitle: "An article for lambhorghini", backgroundImage: lamboLogo, description: groupDescription },
        ];



        // Each of these sample items should have a reference to a particular
        // group.
        var sampleItems = [
            { group: sampleGroups[0], title: "Internal combustion engine", subtitle: "summary", description: "The intro paragraph", content: "The internal combustion engine is an engine in which the combustion of a fuel (normally a fossil fuel) occurs with an oxidizer (usually air) in a combustion chamber that is an integral part of the working fluid flow circuit. In an internal combustion engine (ICE) the expansion of the high-temperature and high-pressure gases produced by combustion apply direct force to some component of the engine. The force is applied typically to pistons, turbine blades, or a nozzle. This force moves the component over a distance, transforming chemical energy into useful mechanical energy. The first commercially successful internal combustion engine was created by Étienne Lenoir.[1] <br /> The term internal combustion engine usually refers to an engine in which combustion is intermittent, such as the more familiar four-stroke and two-stroke piston engines, along with variants, such as the six-stroke piston engine and the Wankel rotary engine. A second class of internal combustion engines use continuous combustion: gas turbines, jet engines and most rocket engines, each of which are internal combustion engines on the same principle as previously described.[1] <br /> The ICE is quite different from external combustion engines, such as steam or Stirling engines, in which the energy is delivered to a working fluid not consisting of, mixed with, or contaminated by combustion products. Working fluids can be air, hot water, pressurized water or even liquid sodium, heated in some kind of boiler. ICEs are usually powered by energy-dense fuels such as gasoline or diesel, liquids derived from fossil fuels. While there are many stationary applications, most ICEs are used in mobile applications and are the dominant power supply for cars, aircraft, and boats.", backgroundImage: "http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Arbeitsweise_Zweitakt.gif/220px-Arbeitsweise_Zweitakt.gif" },
            { group: sampleGroups[0], title: "Nomenclature", subtitle: "", description: "", content: 'At one time, the word, "Engine" (from Latin, via Old French, ingenium, "ability") meant any piece of machinery—a sense that persists in expressions such as siege engine. A "motor" (from Latin motor, "mover") is any machine that produces mechanical power. Traditionally, electric motors are not referred to as "Engines"; however, combustion engines are often referred to as "motors." (An electric engine refers to a locomotive operated by electricity.)', backgroundImage: darkGray },
            { group: sampleGroups[0], title: "Types of internal combustion engine", subtitle: "", description: "", content: "This is too long to hardcode", backgroundImage: mediumGray },



            { group: sampleGroups[1], title: "Lamborghini", subtitle: "Main article", description: "Intro to the Lambhorghini", content: "Automobili Lamborghini S.p.A. (Italian: [lamborˈɡiːni] ( listen)) is an Italian manufacturer of luxury sportscars which is owned by Volkswagen Group through its subsidiary Audi. Lamborghini's production facility and headquarters are located in Sant'Agata Bolognese, Italy. In 2011, Lamborghini's 831 employees produced 1,711 vehicles.<br />Manufacturing magnate Ferruccio Lamborghini founded Automobili Ferruccio Lamborghini S.p.A. in 1963 with the objective of producing a refined grand touring car to compete with offerings from established marques such as Ferrari. The company's first models were released in the mid-1960s and were noted for their refinement, power and comfort. Lamborghini gained wide acclaim in 1966 for the Miura sports coupé, which established rear mid-engine, rear wheel drive as the standard layout for high-performance cars of the era.<br />Lamborghini grew rapidly during its first decade, but hard times befell the company when sales plunged in the wake of the 1973 worldwide financial downturn and the 1973 oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978, before Chrysler Corporation took control in 1987. Unable to operate Lamborghini profitably, Chrysler sold Lamborghini to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. Lack of success continued through the 1990s, until Mycom Setdco and V'Power sold Lamborghini to the AUDI AG subsidiary of Volkswagen Group on 27 July 1998. Audi's ownership marked the beginning of a period of stability and increased productivity for Lamborghini. Sales increased nearly tenfold over the course of the 2000s, peaking with record sales in 2007 and 2008. The world financial crisis in the late 2000s negatively affected all luxury car makers worldwide, and caused Lamborghini's sales to drop nearly 50 percent.<br />Lamborghini's Sant'Agata Bolognese production facility produces V12 engines and finished automobiles. Lamborghini's current production vehicles are the V10-powered Gallardo and the V12-powered Aventador. Both production models are available in a variety of regular and limited-edition specifications.", backgroundImage: lamboLogo },
            { group: sampleGroups[1], title: "Origin", subtitle: "From tractor to supercar", description: "How it all began", content: "Ferruccio Lamborghini, the man who would found Automobili Ferruccio Lamborghini S.p.A. in 1963, was the child of viticulturists living in Renazzo di Cento, Province of Ferrara, in the Northern Italy's Emilia-Romagna region.[3][14][15] After serving as a mechanic in the Italian Royal Air Force during World War II, Lamborghini went into business building tractors based on surplus WWII military hardware.[16][17] By the mid-1950s, Lamborghini's tractor company, Lamborghini Trattori S.p.A.,[18] had become one of the largest agricultural equipment manufacturers in the country.[19] He was also the owner of a successful gas heater and air conditioning manufacturer.]<br/>Lamborghini's wealth allowed him to cultivate a childhood interest in cars, owning a number of luxury automobiles including Alfa Romeos, Lancias, Maseratis, and a Mercedes-Benz.[20] He purchased his first Ferrari, a 250GT, in 1958, and went on to own several more. Lamborghini was fond of the Ferraris, but considered them too noisy and rough to be proper road cars, likening them to repurposed track cars.[20] When Lamborghini discovered that the clutch on his Ferrari was broken, and actually was the same clutch that he used on his tractors, Lamborghini went to Ferrari and asked for a better replacement. Ferrari responded, saying that he was just a tractor maker, and could not know anything about sports cars.[20][21][22] Lamborghini decided to pursue an automobile manufacturing venture with the goal of bringing to life his vision of a perfect grand tourer.[19]", backgroundImage: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lamborghini_22PS_1951.jpg/220px-Lamborghini_22PS_1951.jpg" },
        ];

        return sampleItems;
    }
})();
