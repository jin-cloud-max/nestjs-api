import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PaymentController implements OnModuleInit {
    constructor(
        @Inject('KAFKA_SERVICE')
        private clientKafka: ClientKafka
    ) {}

    async onModuleInit() {
        this.clientKafka.subscribeToResponseOf('valida_alguma_coisa')
    }

    @MessagePattern('pagamentos')
    consumePayment(@Payload() message) {
        console.log(message.value)
        const response = this.clientKafka.send(
            'valida_alguma_coisa',
            JSON.stringify({
                key1: 'val1'
            })
        ).subscribe(reply => console.log(reply))
    }
}
