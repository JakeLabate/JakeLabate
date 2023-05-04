// global data
const global = {
	url: "https://lionscreekfencing.com/",
	companyName: "Lions Creek Fencing",
	ratingValue: "5", // using these for specific service pages
	reviewCount: "34", // using these for specific service pages
	state: "Connecticut",
	phone: "203-535-8091",
	email: "fencing@lionscreekconstruction.com",
	logoUrlAbsolute: "https://lionscreekfencing.com/wp-content/uploads/2022/11/LionsCreekFencing-horiz.png"
}
const service = {
	slug: "fence-services/vinyl-fencing",
	name: "Vinyl Fencing",
	description: 'this is a description of the service',
	serviceOutput: "Vinyl Fence"
}

const WebsiteANDWebpageANDOrganization = {
	  "@context": "https://schema.org",
	  "@graph": [
		  {
			  "@type": "WebSite",
			  "@id": global.url + "#website",
			  "url": global.url,
			  "name": "Lions Creek Fencing",
		  },
		  {
			  "@type": "WebPage",
			  "@id": global.url + service.slug + "#webpage",
			  "url": global.url + service.slug,
			  "name": service.name,
			  "isPartOf": {
				  "@id": global.url + "#website"
			  }
		  },
		  {
			  "@type": "Organization",
			  "@id": global.url + "#organization",
			  "url": global.url,
			  "name": global.companyName,
			  "logo": {
				  "@type": "ImageObject",
				  "@id": global.url + "#logo",
				  "url": global.logoUrlAbsolute,
				  "contentUrl": global.logoUrlAbsolute,
				  "caption": global.companyName + "Logo",
			  }
		  }
	  ]
};
const script = document.createElement('script');
script.type = "application/ld+json";
script.innerHTML = JSON.stringify(WebsiteANDWebpageANDOrganization);
document.head.appendChild(script);

const ServiceANDContact = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Service",
			"@id": global.url + service.slug + "#service",
			"url": global.url + service.slug,
			"name": service.name,
			"description": service.description,
			"serviceType": service.name,
			"termsOfService": global.url + "#termsOfService",
			"providerMobility": "dynamic",
			"category": "Fence Contractor",
			"areaServed": {
				"@type": "State",
				"@id": global.url + "#state",
				"name": global.state,
			},
			"availableChannel": {
				"@type": "ServiceChannel",
				"@id": global.url + "#serviceChannel",
				"availableLanguage": {
					"@type": "Language",
					"@id": global.url + "#language",
					"name": "English",
				},
				"serviceUrl": global.url + service.slug,
				"servicePhone": global.phone,
				"serviceSmsNumber": global.phone,
			},
			"brand": {
				"@type": "Brand",
				"@id": global.url + "#brand",
				"name": "Lions Creek Fencing",
				"logo": {
					"@type": "ImageObject",
					"@id": global.url + "#logo",
					"url": global.logoUrlAbsolute,
					"contentUrl": global.logoUrlAbsolute,
					"caption": global.companyName + "Logo",
				}
			},
			"broker": {
				"@type": "Organization",
				"@id": global.url + "#organization",
				"url": global.url,
				"name": global.companyName,
			},
			"hoursAvailable": {
				"@type": "OpeningHoursSpecification",
				"@id": global.url + "#openingHoursSpecification",
				"dayOfWeek": [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				],
				"opens": "08:00",
				"closes": "17:00"
			},
			"logo": {
				"@type": "ImageObject",
				"@id": global.url + "#logo",
				"url": global.logoUrlAbsolute,
				"contentUrl": global.logoUrlAbsolute,
				"caption": global.companyName + "Logo",
			},
			"offers": {
				"@type": "Offer",
				"@id": global.url + service.slug + "#offer",
				"url": global.url + service.slug,
				"name": service.name,
				"priceCurrency": "USD",
			},
			"provider": {
				"@type": "Organization",
				"@id": global.url + "#organization",
				"url": global.url,
				"name": global.companyName,
				"logo": {
					"@type": "ImageObject",
					"@id": global.url + "#logo",
				}
			},
			"serviceOutput": {
				"@type": "Thing",
				"@id": global.url + service.slug + "#thing",
				"url": global.url + service.slug,
				"name": service.serviceOutput,
			},
			"potentialAction": {
				"@type": "InteractAction",
				"@id": global.url + service.slug + "#interactAction",
				"url": global.url + service.slug,
				"name": "Get An Estimate on " + service.name,
				"target": global.url + service.slug,
				"actionStatus": "PotentialActionStatus",
				"instrument": {
					"@type": "Thing",
					"@id": global.url + service.slug + "#getAnEstimateButton",
					"name": "Get An Estimate",
					"description": "Get An Estimate",
					"url": global.url + service.slug,
				},
				"provider": {
					"@type": "Organization",
					"@id": global.url + "#organization",
					"url": global.url,
					"name": global.companyName,
				}
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": global.url + service.slug + "#webpage",
				"url": global.url + service.slug,
			},
			"subjectOf": {
				"@type": "WebPage",
				"@id": global.url + service.slug + "#webpage",
				"url": global.url + service.slug,
			},
			"image": [
				{
					"@type": "ImageObject",
					"url": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-7-400x284.jpg.webp",
					"contentUrl": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-7-400x284.jpg.webp",
					"caption": service.name + " Image",
					"representativeOfPage": true,
				},
				{
					"@type": "ImageObject",
					"url": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-5-400x284.jpg.webp",
					"contentUrl": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-5-400x284.jpg.webp",
					"caption": service.name + " Image",
					"representativeOfPage": true,
				}
			]
		},
		{
			"@type": "ContactPoint",
			"@id": global.url + service.slug + "#contactPoint",
			"url": global.url + service.slug,
			"name": service.name + " Contact",
			"contactType": "customer support",
			"telephone": global.phone,
			"email": global.email,
			"contactOption": "TollFree",
			"availableLanguage": {
				"@type": "Language",
				"@id": global.url + "#language",
				"name": "English",
			},
			"areaServed": {
				"@type": "State",
				"@id": global.url + "#state",
				"name": global.state,
			},
			"hoursAvailable": {
				"@type": "OpeningHoursSpecification",
				"@id": global.url + "#openingHoursSpecification",
				"dayOfWeek": [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				],
				"opens": "08:00",
				"closes": "17:00"
			}
		}
	]
};
const newScript = document.createElement('script');
newScript.type = "application/ld+json";
newScript.innerHTML = JSON.stringify(ServiceANDContact);
document.head.appendChild(newScript);

const ProductANDBrand = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Brand",
			"@id": global.url + "#brand",
			"url": global.url,
			"name": "Lions Creek Fencing",
			"logo": {
				"@type": "ImageObject",
				"@id": global.url + "#logo",
				"url": global.logoUrlAbsolute,
				"contentUrl": global.logoUrlAbsolute,
				"caption": global.companyName + "Logo",
			}
		},
		{
			"@type": "Product",
			"@id": global.url + service.slug + "#product",
			"url": global.url + service.slug,
			"name": service.name,
			"description": service.description,
			"areaServed": {
				"@type": "State",
				"@id": global.url + "#state",
				"name": global.state,
			},
			"brand": {
				"@type": "Brand",
				"@id": global.url + "#brand",
				"name": "Lions Creek Fencing",
				"logo": {
					"@type": "ImageObject",
					"@id": global.url + "#logo",
					"url": global.logoUrlAbsolute,
					"contentUrl": global.logoUrlAbsolute,
					"caption": global.companyName + "Logo",
				}
			},
			"logo": {
				"@type": "ImageObject",
				"@id": global.url + "#logo",
				"url": global.logoUrlAbsolute,
				"contentUrl": global.logoUrlAbsolute,
				"caption": global.companyName + "Logo",
			},
			"offers": {
				"@type": "Offer",
				"@id": global.url + service.slug + "#offer",
				"url": global.url + service.slug,
				"name": service.name,
				"priceCurrency": "USD",
				"price": 1000,
				"availability": "https://schema.org/InStock",
				"hasMerchantReturnPolicy": {
					"@type": "MerchantReturnPolicy",
					"@id": global.url + service.slug + "#merchantReturnPolicy",
					"name": "Lions Creek Fencing Return Policy",
				},
				"shippingDetails": {
					"@type": "OfferShippingDetails",
					"@id": global.url + service.slug + "#offerShippingDetails",
					"shippingDestination": {
						"@type": "DefinedRegion",
						"@id": global.url + "#definedRegion",
						"name": "US"
					},
				}
			},
			"potentialAction": {
				"@type": "InteractAction",
				"@id": global.url + service.slug + "#interactAction",
				"url": global.url + service.slug,
				"name": "Get An Estimate on " + service.name,
				"target": global.url + service.slug,
				"actionStatus": "PotentialActionStatus",
				"instrument": {
					"@type": "Thing",
					"@id": global.url + service.slug + "#getAnEstimateButton",
					"name": "Get An Estimate",
					"description": "Get An Estimate",
					"url": global.url + service.slug,
				},
				"provider": {
					"@type": "Organization",
					"@id": global.url + "#organization",
					"url": global.url,
					"name": global.companyName,
				}
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": global.url + service.slug + "#webpage",
				"url": global.url + service.slug,
			},
			"subjectOf": {
				"@type": "WebPage",
				"@id": global.url + service.slug + "#webpage",
				"url": global.url + service.slug,
			},
			"image": [
				{
					"@type": "ImageObject",
					"url": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-7-400x284.jpg.webp",
					"contentUrl": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-7-400x284.jpg.webp",
					"caption": service.name + " Image",
					"representativeOfPage": true,
				},
				{
					"@type": "ImageObject",
					"url": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-5-400x284.jpg.webp",
					"contentUrl": "https://lionscreekfencing.com/wp-content/uploads/2022/11/vinyl-fencing-5-400x284.jpg.webp",
					"caption": service.name + " Image",
					"representativeOfPage": true,
				}
			],
			"review": [
				{
					"@type": "Review",
					"url": global.url + service.slug,
					"name": "Review of " + service.name,
					"author": {
						"@type": "Person",
						"name": "{{ author.name }}",
					},
					"itemReviewed": {
						"@type": "Offer",
						"@id": global.url + service.slug + "#product",
						"url": global.url + service.slug,
						"name": service.name,
					},
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": global.ratingValue,
						"bestRating": "5",
					}
				}
			],
			"aggregateRating": {
				"@type": "AggregateRating",
				"@id": global.url + service.slug + "#aggregateRating",
				"url": global.url + service.slug,
				"ratingValue": global.ratingValue,
				"reviewCount": global.reviewCount,
			}
		},
	]
};
const newNewScript = document.createElement('script');
newNewScript.type = "application/ld+json";
newNewScript.innerHTML = JSON.stringify(ProductANDBrand);
document.head.appendChild(newNewScript);
