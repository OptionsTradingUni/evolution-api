import { RouterBroker } from '@api/abstract/abstract.router';
import { evolutionController } from '@api/server.module';
import { ConfigService } from '@config/env.config';
import { Router } from 'express';

export class EvolutionRouter extends RouterBroker {
  constructor(readonly configService: ConfigService) {
    super();

    const webhookHandler = async (req: any, res: any) => {
      const { body } = req;
      const response = await evolutionController.receiveWebhook(body);
      return res.status(200).json(response);
    };

    const webhookVerifyHandler = async (req: any, res: any) => {
      return res.status(200).json({ status: 'ok', message: 'Webhook endpoint is active' });
    };

    this.router.post(this.routerPath('webhook/evolution', false), webhookHandler);
    this.router.get(this.routerPath('webhook/evolution', false), webhookVerifyHandler);

    this.router.post(this.routerPath('whatsapp/webhook/evolution', false), webhookHandler);
    this.router.get(this.routerPath('whatsapp/webhook/evolution', false), webhookVerifyHandler);
  }

  public readonly router: Router = Router();
}
