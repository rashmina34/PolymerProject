all the necessary packages are imported initially.

`
`
`
    import '@polymer/paper-checkbox/paper-checkbox.js';
    import '@polymer/iron-image/iron-image.js';
    import '@polymer/iron-pages/iron-pages.js';
`
`
`
// import checkbox, images and iron pages 
// to add image we need install @polymer/iron-image and need to import it 

//command to install iron-image
npm install --save @polymer/iron-image

for pages need to install iron pages

//command to install iron-pages
npm install --save @polymer/iron-pages

//command to install paper-checkbox
npm install --save @polymer/paper-checkbox

similarly you can install all required packages.


selected inside iron-pages determine which pages to be render 
it take 0 by default and identify by opening and ending tag of div element
we can set and chage value of selected as per need


[[...]] is used for one way binding
{{...}} is used for two way binding

`
`
`
<template is="dom-if" if=[[pie]]>
    <lazy-element><p>lazy loading...</p></lazy-element>
</template>
`
`
`

//  new compnent lazy-elemented is imported and return according to condition 
    here in above code flag pie is set and considered the component to be rendered
    if pie is supposed to be true and until component is not ready the lazy loading will be rendered.

