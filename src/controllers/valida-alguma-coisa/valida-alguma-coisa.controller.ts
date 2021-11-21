import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

interface PayloadProps {
    value: string
}

@Controller()
export class ValidaAlgumaCoisaController {
    @MessagePattern('valida_alguma_coisa')
    validaAlgumaCoisa(@Payload() message: PayloadProps) {
        console.log(message.value)
        return {
            respondi: 'respondi'
        }
    }
}
