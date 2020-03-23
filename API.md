# Mongo Synth API

Here are the list of APIs and how you can use them using the Terminal command.

### Getting the synth data (GET)

* Terminal command: 
```
curl -X GET https://cuinjune-mongo-synth.glitch.me/api/v1/synth/data
```
* Returned value example: 
```
[{"_id":"5e789857615abdd2e9fd79c4","preset":"default","knob0":0.3,"knob1":0.3,"knob2":0.5,"knob3":0.5,"knob4":0.5,"knob5":0,"knob6":0,"knob7":0.5,"knob8":0,"knob9":0.5,"knob10":0,"knob11":1,"knob12":0,"knob13":0.5,"knob14":0,"knob15":0.5,"__v":0}]%
```

### Adding the synth data element (POST)

* Terminal command:
```
curl -d "preset=mySound&knob0=0.5&knob1=0.7&knob2=0.7&knob3=0.7&knob4=0.5&knob5=0&knob6=0&knob7=0.5&knob8=0&knob9=0.5&knob10=0&knob11=1&knob12=0&knob13=0.5&knob14=0&knob15=0.5" https://cuinjune-mongo-synth.glitch.me/api/v1/synth/data
```

* Returned value example: 
```
{"message":"successfully added the element","data":"{\"_id\":\"5e78f04635519f0229a8a0d6\",\"preset\":\"mySound\",\"knob0\":0.5,\"knob1\":0.7,\"knob2\":0.7,\"knob3\":0.7,\"knob4\":0.5,\"knob5\":0,\"knob6\":0,\"knob7\":0.5,\"knob8\":0,\"knob9\":0.5,\"knob10\":0,\"knob11\":1,\"knob12\":0,\"knob13\":0.5,\"knob14\":0,\"knob15\":0.5,\"__v\":0}"}%   
```

### Updating the synth data element (PUT)

* Terminal command:
```
curl -X PUT -d "preset=yourSound&knob0=0.1&knob1=0.7&knob2=0.7&knob3=0.7&knob4=0.5&knob5=0&knob6=0&knob7=0.5&knob8=0&knob9=0.5&knob10=0&knob11=1&knob12=0&knob13=0.5&knob14=0&knob15=0.5" https://cuinjune-mongo-synth.glitch.me/api/v1/synth/data/5e78f04635519f0229a8a0d6
```

* Returned value example: 
```
{"message":"successfully updated the element","data":"{\"_id\":\"5e78f20f35519f0229a8a0d7\",\"preset\":\"yourSound\",\"knob0\":0.1,\"knob1\":0.7,\"knob2\":0.7,\"knob3\":0.7,\"knob4\":0.5,\"knob5\":0,\"knob6\":0,\"knob7\":0.5,\"knob8\":0,\"knob9\":0.5,\"knob10\":0,\"knob11\":1,\"knob12\":0,\"knob13\":0.5,\"knob14\":0,\"knob15\":0.5,\"__v\":0}"}%       
```

### Deleting the synth data element (DELETE)

* Terminal command example:
```
curl -X DELETE https://cuinjune-mongo-synth.glitch.me/api/v1/synth/data/5e78f04635519f0229a8a0d6

```

* Returned value example: 
```
{"message":"successfully deleted the element","data":"{\"_id\":\"5e78f04635519f0229a8a0d6\",\"preset\":\"mySound\",\"knob0\":0.5,\"knob1\":0.7,\"knob2\":0.7,\"knob3\":0.7,\"knob4\":0.5,\"knob5\":0,\"knob6\":0,\"knob7\":0.5,\"knob8\":0,\"knob9\":0.5,\"knob10\":0,\"knob11\":1,\"knob12\":0,\"knob13\":0.5,\"knob14\":0,\"knob15\":0.5,\"__v\":0}"}%      
```
