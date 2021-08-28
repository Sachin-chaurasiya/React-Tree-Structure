export const JSONObject={
    "namespace": "org.open-metadata.kafka",
    "name": "Customer",
    "type": "record",
    "fields": [
        {
            "name": "id",
            "type": "string",
            "fields": [
                {
                    "name": "first_name",
                    "type": "string"
                },
                {
                    "name": "last_name",
                    "type": "string"
                },
                {
                    "name": "email",
                    "type": "record",
                    "fields":[
                        {
                            "name":"unique identifier",
                            "type":"string"
                        },
                        {
                            "name":"organization url",
                            "type":"string"
                        }
                    ]
                },
                {
                    "name": "address_line_1",
                    "type": "string"
                },
                {
                    "name": "address_line_2",
                    "type": "string"
                },
                {
                    "name": "post_code",
                    "type": "string"
                },
                {
                    "name": "country",
                    "type": "string"
                }
            ]
        },
        {
            "name": "first_name",
            "type": "string"
        },
        {
            "name": "last_name",
            "type": "string"
        },
        {
            "name": "email",
            "type": "record",
            "fields":[
                {
                    "name":"unique identifier",
                    "type":"string"
                },
                {
                    "name":"organization url",
                    "type":"string"
                }
            ]
        },
        {
            "name": "address_line_1",
            "type": "string"
        },
        {
            "name": "address_line_2",
            "type": "string"
        },
        {
            "name": "post_code",
            "type": "int"
        },
        {
            "name": "country",
            "type": "string"
        }
    ]
}