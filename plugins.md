## ember-cli-tailwind
## ember-composable-helpers
## ember-concurrency
## ember-noscript

## ember-cli-new-version

* install addon
* we can use as follows:
`config newVersion:{ enable: true }`
```hbs
{{#new-version-notifier as |version lastVersion reload close|}}
  <div class="custom-notification">
    Reload to update to the new version ({{version}}) of this application
    <button type="button" onclick={{action reload}}>Reload</button>
    <button type="button" onclick={{action close}}>Close</button>
  </div>
{{/new-version-notifier}}
```
* **one more thing this addon need jquery dependency**