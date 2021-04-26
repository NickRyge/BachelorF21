const k8s = require('@kubernetes/client-node');
console.log(k8s.APIS.values)
console.log("1")
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
console.log(kc.clusters)
console.log("2")
console.log(kc.contexts)
console.log("3")
console.log(kc.currentContext)
console.log("4")
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
console.log(k8sApi.basePath)
console.log("5")

k8sApi.listPodForAllNamespaces()
    .then((res) => {
	console.log(res.body);
    }).catch(console.log("API ER LORT!!!"));