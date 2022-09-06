function htmlspecialchars(formData) {
    let output = "";
    for (let i = 0; i < formData.length; i++) {
      if (formData[i] === '<') {
        output += '&lt;';
      } else if (formData[i] === '>') {
        output += '&gt;';
      } else if (formData[i] === '"') {
        output += '&quot;';
      } else if (formData[i] === '&') {
        output += '&amp;';
      } else {
        output += formData[i];
      }
    }
    return output;
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));

//output => &lt;h2&gt;Hello World&lt;/h2&gt;