inside html file all the necessary packages are imported and considered start-polymer3 as home page.

`
`
`
 <script src="./src/start-polymer3.js" type="module" async></script>
`
` 
`
\\* import start-polymer3.js as main file inside html *\\

`
`
`
 <start-polymer3>
  <h1>Start Polymer 3.0</h1>
    <p id="jsyes"></p>
    <script type="text/javascript">
      document.getElementById('jsyes').innerHTML = 'Loading...'
    </script>
  </start-polymer3>

`
`
`
\\* until component start-polymer3 doesn't load completely Loading... will be rendered *\\

`
`
`
    on-click="handleClick"
`
`
`
event is fired as above syntax in it as polymer project use the rule of #useThePlatform.

handleClick can be handle above template.

properties and their type are set initially and values are also set if it seems to be necessary.
