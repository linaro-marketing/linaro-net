---
layout: default
title: Feedback test page
---
This is a simple page used to test feedback options.

<!--
<script type="text/javascript" src="https://servicedesk.linaro.org/s/d41d8cd98f00b204e9800998ecf8427e-CDN/-er8alm/805001/5cf61e0c0b53488a73cb9c71e35eeb27/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=fb0d08ca"></script><script type="text/javascript" src="https://servicedesk.linaro.org/s/2522f413650ccec1c347dd3ec64bdfa3-T/-er8alm/805001/5cf61e0c0b53488a73cb9c71e35eeb27/3.1.0/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-GB&collectorId=fb0d08ca"></script>

<script type="text/javascript">
window.ATL_JQ_PAGE_PROPS =  {
"triggerFunction": function(showCollectorDialog) {
    jQuery("#feedback-button").click(function(e) {
        e.preventDefault();
        showCollectorDialog();
    });
},
"fieldValues": {
    "priority": '10002',
    "customfield_10133": window.location.href,
    "customfield_10100": {
        "requestType": {
            "id": "168"
        }
    }
}};
</script>
-->

<!--
<script type="text/javascript" src="https://servicedesk.linaro.org/s/d41d8cd98f00b204e9800998ecf8427e-CDN/-wu5qcz/805001/5cf61e0c0b53488a73cb9c71e35eeb27/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=ed88928f"></script>
<script type="text/javascript" src="https://servicedesk.linaro.org/s/764b54e4704f2020c4bab79ad08c0fc9-T/-wu5qcz/805001/5cf61e0c0b53488a73cb9c71e35eeb27/3.1.0/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-GB&collectorId=ed88928f"></script>
-->

<script type="text/javascript">
jQuery.ajax({
    url: "https://servicedesk.linaro.org/s/764b54e4704f2020c4bab79ad08c0fc9-T/-wu5qcz/805001/5cf61e0c0b53488a73cb9c71e35eeb27/3.1.0/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-GB&collectorId=ed88928f",
    type: "get",
    cache: true,
    dataType: "script"
});
window.ATL_JQ_PAGE_PROPS =  {
"triggerFunction": function(showCollectorDialog) {
    //Requires that jQuery is available! 
    jQuery("#feedback-button").click(function(e) {
        e.preventDefault();
        showCollectorDialog();
    });
},
"fieldValues": {
    "priority": '10102',
    "customfield_10133": window.location.href,
    "customfield_10100": {
        "requestType": {
            "id": "278"
        }
    }
}};
</script>

<a href="#" id="feedback-button" class='btn btn-primary btn-large'>Report feedback</a>
