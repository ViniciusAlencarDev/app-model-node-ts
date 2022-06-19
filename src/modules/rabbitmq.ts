const { connect } = require('amqplib');

class RabbitMQ {
    private connection: any;
    private channel: any;

    async start() {
        this.connection = await connect('amqp://localhost')
        this.channel = await this.connection.createChannel()
    }

    async sendMessage(queue: string, message: string) {
        return this.channel.sendToQueue(queue, Buffer.from(message))
    }

    async receiveMessage(queue: string, callback: void | any) {
        return this.channel.consume(queue, (message: any) => {
            callback(message)
        })
    }
}

(async () => {
    const msg = new RabbitMQ()
    await msg.start()
    await msg.sendMessage('teste', 'ola mundo')
    await msg.receiveMessage('teste', (message: any) => {
        console.log(message.content.toString())
    })
})()
