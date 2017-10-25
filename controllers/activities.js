app.controller("ActivitiesCtrl", function($scope) {
	$scope.activities = [
		{
			"title": "Brotherhood Trips",
			"key": "bro-trips",
			"images": [
				{
					"key": "0B23ZW2d0WWSrOG1fZ1lTX2xVckk",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrdEoyR0Q3SDJraTA",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrd2VMX3JnbGs0RkU",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrSDYyUHdWS09scDA",
					"class": "active"
				},
				{
					"key": "0B23ZW2d0WWSrLUZ5ZndMbWRkUUk",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrQ3RRMkFlcXhibkk",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrR0w1TFNYYVd0QzQ",
					"class": ""
				},
			]
		},
		{
			"title": "Hotel Garuda After Party",
			"key": "hotel-garuda",
			"images": [
				{
					key: "0B23ZW2d0WWSrV2xRalZSSjY3TlE",
					class: "active"
				},
				{
					key: "0B23ZW2d0WWSrS2NlY1lEdElHZFE",
					class: ""
				},
				{
					key: "0B23ZW2d0WWSrM0cwbjZJeVplSTg",
					class: ""
				},
				{
					key: "0B23ZW2d0WWSraVNDV3hVQlVkY0k",
					class: ""
				}
			]
		},
		{
			"title": "Fratsgiving",
			"key": "fratsgiving",
			"images": [
				{
					key: "0B23ZW2d0WWSrRkdzSGZxUGRRcG8",
					class: "active"
				},
				{
					key: "0B23ZW2d0WWSrZlZ4UDFtRmhEaFE",
					class: ""
				},
				{
					key: "0B23ZW2d0WWSrdkRyZm1FQy03ODA",
					class: ""
				},
				{
					key: "0B23ZW2d0WWSrdTFQbGhrTE91X3c",
					class: ""
				},
			]
		},
		{
			"title": "Senior Sendoff 2017",
			"key": "senior-sendoff",
			"images": [
				{
					"key": "0B23ZW2d0WWSrcWNyNTh2MXUyc3c",
					"class": "active"
				},
				{
					"key": "0B23ZW2d0WWSrMmlJWW5xNE9LYTA",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrMjVXcUxKMlNrbkU",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrSlJQTHdQTlBpUEU",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrcHpzTmhJbi1xVEE",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrTUdadHlGd1o4UEE",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrMEpWY01fdGFhWTQ",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrZkJDZ0k5ZFlHM2s",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSreDA3dDVrMUt5RVU",
					"class": ""
				},
			]
		},
		{
			"title": "Assorted",
			"key": "assorted",
			"images": [
				{
					"key": "0B23ZW2d0WWSrUElXY2lmdU1ZUGM",
					"class": "active"
				},
				{
					"key": "0B23ZW2d0WWSrNkhIZE85c3F1LUk",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrVlF2Ml9KRjhkUG8",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSraUI4WVFTbUR2dGs",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrSXc1ZjFMYUlMT1U",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrcFh0cnhCbzJNelk",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrTXFPdVZHTmphZ2M",
					"class": ""
				},
				{
					"key": "0B23ZW2d0WWSrcXdTV1NmeG96RW8",
					"class": ""
				},
			]
		}
	];

	$scope.init = function() {
		$(document).ready(loadFirstVisit);
		$('.carousel').carousel({
			interval: false
		});
	};
});
