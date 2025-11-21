// server/routes/notification.route.js
const notificationRoutes = Router();

// /api/notifications
notificationRoutes.post('/email/send', (req, res) => { /* notificationController.sendEmail */ res.send('Send an email notification'); });
notificationRoutes.get('/templates', (req, res) => { /* notificationController.getTemplates */ res.send('Get all notification templates'); });
notificationRoutes.post('/templates', (req, res) => { /* notificationController.createTemplate */ res.send('Create new notification template'); });
notificationRoutes.put('/templates/:id', (req, res) => { /* notificationController.updateTemplate */ res.send('Update notification template'); });
notificationRoutes.delete('/templates/:id', (req, res) => { /* notificationController.deleteTemplate */ res.send('Delete notification template'); });

export default notificationRoutes