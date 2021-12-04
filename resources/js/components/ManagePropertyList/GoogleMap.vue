<template>
  <div>
    <div>
      <h2>Vue Js Search and Add Marker</h2>

      <label>
        <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>

        <button @click="addLocationMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
        :zoom="16"
        :center="center"
        style="width:100%;  height: 200px;"
      >
      <gmap-marker
        :position="center"
        :draggable="true"
        @drag="updateCoordinates"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
        center: {
            lat: 39.7837304,
            lng: -100.4458825
        },
        locationMarkers: [],
        locPlaces: [],
        existingPlace: null,
        start: 0,
        coordinate:{
            lat: null,
            lng: null,
        }
    };
  },
    mounted:  function(){
        if(this.start == 0){
            this.locateGeoLocation();
            this.activate();
            this.start ++;
          }


      },

  methods: {
      updateCoordinates(location) {
            this.center = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };
             this.$emit('getCoordinate', this.center)

        },
        activate() {
            setTimeout(() => this.$emit('getCoordinate', this.coordinate), 10000);
        },

    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
        this.coordinate = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });


    }
  }
};
</script>
